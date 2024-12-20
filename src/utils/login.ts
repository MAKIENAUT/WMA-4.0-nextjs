"use server";

export async function login(credentials: { email: string; password: string }) {
  try {
    const response = await fetch("http://localhost:3001/api/v1/auth/login", {
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
