import { lecturerRoutes, studentRoutes } from "@/constants/routes";
import { NextResponse } from "next/server";

export function middleware(req, res) {
  // const cookies = new Cookies(req, res);
  const pathName = req.nextUrl.pathname;
  if (pathName.includes("portal")) {
    //   retrieve role
    const role = req.cookies.get("role");
    // retrieve token
    const token = req.cookies.get("token");
    //   // check if pathname is public
    //   if (studentRoutes.public.includes(request.nextUrl.pathname)) {
    //     return NextResponse.next();
    //   }

    console.log("NExt Path is::::: ", pathName);

    // check if route is private and token is present
    // if (studentRoutes.private.includes(pathName)) {
    // check if pathname being opened is from student portal and to token exists
    if (!token && studentRoutes.private.includes(pathName)) {
      return NextResponse.redirect(
        new URL("/portal/student/auth/login", req.url)
      );
    }
    // check if pathname being opened is from lecturer portal and no token exists
    else if (!token && lecturerRoutes.private.includes(pathName)) {
      return NextResponse.redirect(
        new URL("/portal/lecturer/auth/login", req.url)
      );
    }
    // check if token exists and role is wrongg
    else if (token && !pathName.toLowerCase().includes(role)) {
      // redirect to student portal if role is student
      if (role === "student") {
        return NextResponse.redirect(new URL("/portal/student", req.url));
      }
      //   redirect to lecturer portal if role is lecturer
      else if (role === "lecturer") {
        return NextResponse.redirect("/portal/lecturer");
      } else
        return NextResponse.redirect(
          new URL("/portal/student/auth/login", req.url)
        );
    }

    // check if path is public and token exists
    else if (token && studentRoutes.public.includes(pathName)) {
      return NextResponse.redirect(new URL("/portal/student", req.url));
    } else if (token && lecturerRoutes.public.includes(pathName)) {
      return NextResponse.redirect(new URL("/portal/lecturer", req.url));
    }
  }
}
