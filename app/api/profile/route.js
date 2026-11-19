import { cookies } from "next/headers";

export async function GET(request, { params }) {
  const requestHeader = new Headers(request.headers);
  // console.log("Request Headers:", requestHeader);
  cookies().set("myCookie", "cookieValue");
  return new Response(JSON.stringify({ message: "Hello from the profile API!" }), {
    headers: {
      "Content-Type": "application/json",
    }
  });
}