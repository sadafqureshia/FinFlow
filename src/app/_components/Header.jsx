"use client";
import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useUser, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { useRouter } from "next/navigation"; // For client-side navigation

function Header() {
  const { user, isSignedIn } = useUser();
  const router = useRouter(); // Hook for routing

  const handleDashboardClick = () => {
    if (isSignedIn) {
      // Redirect to dashboard if signed in
      router.push("/dashboard");
    } else {
      // Redirect to sign-in page if not signed in
      router.push("/sign-in");
    }
  };

  return (
    <div className="p-5 flex justify-between items-center border shadow-sm">
      <div className="flex flex-row items-center">
        <Image src={"/new.jpg"} alt="logo" width={40} height={100} />
        <span className="text-blue-800 font-bold text-xl">Finflow</span>
      </div>

      <div className="flex gap-3 items-center">
        {/* Dashboard Button should always be shown, but it checks whether user is signed in */}
        <Button variant="outline" className="rounded-full" onClick={handleDashboardClick}>
          Dashboard
        </Button>

        {/* Show UserButton if signed in, otherwise show "Get Started" button */}
        {isSignedIn ? (
          <UserButton />
        ) : (
          <Link href="/sign-in">
            <Button className="rounded-full">Get Started</Button>
          </Link>
        )}
      </div>
    </div>
  );
}

export default Header;
