import { NextResponse } from 'next/server'

// This function can be marked `async` if using `await` inside
export function middleware(request) {
  console.log("Middleware executed for request:", request.nextUrl);
  return NextResponse.next();
  // return NextResponse.json({ message: "Hello from the middleware!" }, {
  //   headers: {
  //     "Content-Type": "application/json",
  //   }
  // });
  // request.url = domain and /home = path
  // return NextResponse.redirect(new URL('/home', request.url))
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: '/api/:path*',
}