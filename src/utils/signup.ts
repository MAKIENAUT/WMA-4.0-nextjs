"use server";

export async function signup(credentials: {
  name: string;
  email: string;
  password: string;
}) {
  try {
    const response = await fetch("http://localhost:3001/api/v1/auth/register", {
      method: "POST",
      body: JSON.stringify(credentials),
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error);
    }

    return data;
  } catch (err) {
    throw err;
  }
}
