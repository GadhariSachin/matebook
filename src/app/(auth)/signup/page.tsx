import { Metadata } from "next";
import React from "react";
import SignUpImage from "@/assets/signup-image.jpg";
import Image from "next/image";
import Link from "next/link";
import SignupForm from "./SignupForm";

const Page = () => {
  return (
    <main className="flex h-screen justify-center p-5">
      <div className="flex h-full max-h-[40rem] w-full max-w-[64rem] overflow-hidden rounded-2xl bg-card shadow-2xl">
        <div className="w-full space-y-10 overflow-y-auto p-10 md:w-1/2">
          <div className="space-y-1 text-center">
            <h1 className="text-3xl font-bold"> Sign up Matebook</h1>
            <p className="text-muted-foreground">
              A place where even <span className="font-bold italic">you</span>{" "}
              can find a friend.
            </p>
            <div className="space-y-5">
              <SignupForm />
              <Link href="/login" className="group inline-block text-center">
                Already have an account?{" "}
                <span className="group-hover:underline">Log in</span>
              </Link>
            </div>
          </div>
        </div>
        <Image
          src={SignUpImage}
          alt="Sign Up Form Image"
          className="hidden w-1/2 object-cover md:block"
        />
      </div>
    </main>
  );
};

export default Page;

export const metadata: Metadata = {
  title: "Sign Up",
};
