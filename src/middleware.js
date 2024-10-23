import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export default withAuth(
  // `withAuth` augments your `req` with the user's token.
  function middleware(req) {
    const token = req.nextauth.token;

    // check if pathname is of authentication and token exists
    if (req.nextUrl.pathname.includes("auth") && token?.token) {
      if (token.role === "student")
        return NextResponse.redirect(new URL("/", req.url));
      else if (token.role === "lecturer")
        return;
      return Next;
    }
    // check if paths collide
    // if the user is authenticated, and role is student while designated route is of kecturer, redirect to student dashboard
    if (
      token?.role === "student" &&
      req.nextUrl.pathname.includes("lecturer")
    ) {
      return NextResponse.redirect(new URL("/", req.url));
    }

    // if the user is authenticated, and role is lecturer while designated route is of student, redirect to lecturer dashboard
    if (
      token?.role === "lecturer" &&
      req.nextUrl.pathname.includes("student")
    ) {
      return;
    }
  },
  {
    callbacks: {
      authorized: ({ token }) => !!token?.token,
    },
    pages: {
      signIn: "/auth/login",
      error: "/error",
    },
  }
);

export const config = {
  matcher: ["/:path*"],
};
