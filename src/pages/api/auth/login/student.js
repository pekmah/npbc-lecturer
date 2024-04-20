import endpoints from "@/services/endpoints";
import { ENDPOINT } from "@/services/AxiosServices";
import axios from "axios";
import Cookies from "js-cookie";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { email, password } = req.body;

    try {
      const response = await fetch(ENDPOINT + endpoints.login, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });
      const data = await response.json();

      console.log(data);
      // if (data?.token) {
      return res.status(200).json({ message: "signin successful" });
      //   // Save the token in a cookie

      //   Cookies.set("token", data.token, {
      //     httpOnly: true, // prevents the cookie from being accessed by client-side JavaScript
      //     secure: process.env.NODE_ENV === "production", // use a secure cookie in production
      //     sameSite: "strict", // prevents the cookie from being sent in cross-site requests
      //     path: "/",
      //   });
      //   Cookies.set("role", "student", { path: "/" });
      //   return res.status(200).json({ message: "signin successful" });
      // } else {
      //   return res.status(400).json({ message: "signin unsuccessful" });
      // }
    } catch (e) {
      console.log("ERROR:: ", e);
      const stringifiedError = convertErrorToString(e.response?.data);

      return res
        .status(e.response?.status || 400)
        .json({ message: stringifiedError });
    }
  }
}

function convertErrorToString(error) {
  let errorString = "";
  if (error?.message) {
    return error.message;
  }

  for (const key in error) {
    if (error.hasOwnProperty(key)) {
      errorString += `${key}: ${error[key]?.join(", ")}`;
    }
  }
  return errorString;
}
