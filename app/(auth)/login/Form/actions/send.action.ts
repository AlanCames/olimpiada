"use server";
import { cookies } from "next/headers";

import { LoginFormInputs } from "..";
import { apiClient } from "@/api/client";

export async function loginUserAction(data: LoginFormInputs) {
  const response = await apiClient<{ access_token: string }>("/auth/login", {
    method: "POST",
    body: JSON.stringify(data),
  });
  return response;
}

export async function storeCookie(accessToken: string) {
  cookies().set("access_token", accessToken);
}
