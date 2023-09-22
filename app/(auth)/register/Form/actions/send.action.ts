"use server";

import { RegisterFormInputs } from "..";
import { apiClient } from "@/api/client";

export async function registerUserAction(data: RegisterFormInputs) {
  const response = await apiClient("/auth/register", {
    method: "POST",
    body: JSON.stringify(data),
  });
  return response;
}
