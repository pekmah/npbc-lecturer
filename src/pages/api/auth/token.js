"use server";

import { cookies } from "next/headers";

export default async function handler(req, res) {
  if (req.method === "GET") {
    const cookieStore = cookies();
    const token = cookieStore.get("token");

    console.log(token);

    return token;
  }
}
