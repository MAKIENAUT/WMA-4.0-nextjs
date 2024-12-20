"use client";
import {
  InferredSignupSchemaType,
  SIGNUP_DEFAULT_VALUES,
  signupSchema,
} from "@/types/signup-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
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
import { useMutation } from "@tanstack/react-query";
import { signup } from "@/utils/signup";

export default function SignupForm({ variant }: { variant: "signup" }) {
  const form = useForm<InferredSignupSchemaType>({
    resolver: zodResolver(signupSchema),
    defaultValues: SIGNUP_DEFAULT_VALUES,
    mode: "onBlur",
  });

  const signupMutation = useMutation({
    mutationFn: (values: InferredSignupSchemaType) =>
      signup({
        name: values.full_name,
        email: values.email,
        password: values.password,
      }),
    onSuccess: (data: { message: string }) => {
      toast({ title: data.message });
      setTimeout(() => redirect("/"), 1000);
    },
    onError: (err) => {
      toast({ title: err.message, variant: "destructive" });
    },
  });

  async function onSubmit(values: InferredSignupSchemaType) {
    signupMutation.mutate(values);
  }

  return (
    <>
      <FormContent>
        <FormTitle title="Create an account" />
        <Form {...form}>
          <FormWrapper onSubmit={form.handleSubmit(onSubmit)}>
            <InputGroup>
              <FormField
                name="full_name"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Full Name:</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter your Full Name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
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
              <FormField
                name="confirmPassword"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Confirm Password:</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Re-enter your password"
                        type="password"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </InputGroup>
            <Button
              type="submit"
              variant="secondary"
              disabled={signupMutation.isPending}
            >
              {signupMutation.isPending ? "Signing up" : "Sign Up"}
            </Button>
          </FormWrapper>
        </Form>
      </FormContent>
      <FormFooter variant={variant} />
    </>
  );
}
