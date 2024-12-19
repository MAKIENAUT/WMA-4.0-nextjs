"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  InferredLoginSchemaType,
  LOGIN_DEFAULT_VALUES,
  loginSchema,
} from "@/types/login-schema";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../atoms/ui/form";
import { Input } from "../atoms/ui/input";
import { Button } from "../atoms/ui/button";
import FormFooter from "../molecules/form-footer";
import FormContent from "../molecules/form-content";
import FormTitle from "../molecules/form-title";
import InputGroup from "../molecules/input-group";
import FormWrapper from "../molecules/form-wrapper";
import { toast } from "@/hooks/use-toast";
import { redirect } from "next/navigation";

export default function LoginForm({ variant }: { variant: "login" }) {
  const form = useForm<InferredLoginSchemaType>({
    resolver: zodResolver(loginSchema),
    defaultValues: LOGIN_DEFAULT_VALUES,
    mode: "onBlur",
  });

  const onSubmit = async (values: InferredLoginSchemaType) => {
    try {
      const response = await fetch("http://localhost:3001/api/v1/auth/login", {
        method: "POST",
        body: JSON.stringify({
          email: values.email,
          password: values.password,
        }),
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
      });
      if (response.status === 401) {
        const error = await response.json();
        toast({ title: error.error, variant: "destructive" });
      }

      if (response.status === 200) {
        const data = await response.json();
        toast({ title: data.message });
        setTimeout(() => redirect("/"), 1000);
      }
    } catch (err) {
      console.error("An error happened: " + err);
    }
  };

  return (
    <>
      <FormContent>
        <FormTitle title="Login" />
        <Form {...form}>
          <FormWrapper onSubmit={form.handleSubmit(onSubmit)}>
            <InputGroup>
              <FormField
                name="email"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email:</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter your email" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                name="password"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password:</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter your password"
                        type="password"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </InputGroup>
            <Button type="submit" variant="secondary">
              Log in
            </Button>
          </FormWrapper>
        </Form>
      </FormContent>
      <FormFooter variant={variant} />
    </>
  );
}
