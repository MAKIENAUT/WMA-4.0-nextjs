import { queryOptions } from "@tanstack/react-query";

export const userQueryOptions = queryOptions({
  queryKey: ["user"],
  queryFn: async () => {
    const response = await fetch("http://localhost:3001/api/v1/auth/me");
    return response.json();
  },
});
