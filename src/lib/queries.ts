import { getUser } from "@/utils/get-user";
import { queryOptions } from "@tanstack/react-query";

export const userQueryOption = queryOptions({
  queryKey: ["user"],
  queryFn: getUser,
});
