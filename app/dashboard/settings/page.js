import Button from "@/app/components/Button";
import SortProducts from "@/app/components/SortProducts";
import { Suspense } from "react";

export const metadata = {
  title: "Settings",
  description: "Introduction to Next.js",
};

export default function Settings() {
  return (
    <div className="h-dvh w-full flex flex-col items-center justify-center gap-3">
      <h1>Welcome to settings page</h1>
      <Button path="/dashboard/analytics" label="Go to Analytics Page" />
      <br />
      <br />
      <Suspense fallback={<div>Loading...</div>}>
        <SortProducts />
      </Suspense>
    </div>
  );
}
