import { Metadata } from "next";
import Image from "next/image";
import React from "react";

import LoginImage from "@/assets/login-image.jpg";
import Link from "next/link";
import LoginForm from "./LoginForm";

const Page = () => {
  return (
    <main className="flex h-screen justify-center p-5">
      <div className="flex h-full max-h-[40rem] w-full max-w-[64rem] overflow-hidden rounded-2xl bg-card shadow-2xl">
        <div className="w-full space-y-10 overflow-y-auto p-10 md:w-1/2">
          <div className="space-y-1 text-center">
            <h1 className="text-center text-3xl font-bold">Login Matebook</h1>
            <div className="space-y-5">
              <LoginForm />
              <Link href="/signup" className="group inline-block text-center">
                Don&apos;t have an account?{" "}
                <span className="group-hover:underline">Sign up</span>
              </Link>
            </div>
          </div>
        </div>
        <Image
          src={LoginImage}
          alt="Login Form Image"
          className="hidden w-1/2 object-cover md:block"
        />
      </div>
    </main>
  );
};

export default Page;

export const metadata: Metadata = {
  title: "Login",
};
