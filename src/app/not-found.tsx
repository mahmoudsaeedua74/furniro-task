import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-white px-5 text-center">
      <h1 className="text-8xl font-extrabold text-black mb-6 select-none">
        404
      </h1>
      <p className="text-lg sm:text-xl text-gray-600 mb-12 max-w-md">
        Oops! The page you’re looking for can’t be found.
      </p>
      <Link href="/">
        <Button variant="buyNow" size="buyNow" >
          Go Home
        </Button>
      </Link>
    </main>
  );
}
