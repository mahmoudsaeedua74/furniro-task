"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

export default function ComingSoon() {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white px-5 text-center gap-6">
      <h1 className="text-7xl font-extrabold text-black select-none">
        Coming Soon
      </h1>
      <p className="text-lg sm:text-xl text-gray-600 max-w-md">
        This page is under construction. We are working hard to bring it to you
        soon.
      </p>
      <Button
        variant="showMore"
        size="showMore"
        onClick={() => router.push("/")}
      >
        Go Home
      </Button>
    </div>
  );
}
