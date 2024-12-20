"use server";

export async function getUser() {
  const response = await fetch("http://localhost:3001/api/v1/auth/me");
  return response.json();
}
