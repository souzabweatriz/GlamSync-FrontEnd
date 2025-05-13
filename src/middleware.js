import { NextResponse } from "next/server";

export const config = {
    matcher: "/",
};

export default function middleware(req) {
    return NextResponse.redirect(new URL("/initial", req.url));
}