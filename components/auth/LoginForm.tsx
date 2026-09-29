"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const socialLogins = [
  { name: "Facebook", icon: "/icons/facebook.svg" },
  { name: "Google", icon: "/icons/google.svg" },
];

export default function LoginForm() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({ email: "", password: "" });

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const newErrors = { email: "", password: "" };

    if (!email) {
      newErrors.email = "Email is required";
    } else if (!emailPattern.test(email)) {
      newErrors.email = "Please enter a valid email";
    }

    if (!password) {
      newErrors.password = "Password is required";
    } else if (password.length < 8) {
      newErrors.password = "Password must be at least 8 characters";
    }

    setErrors(newErrors);

    if (!newErrors.email && !newErrors.password) {
      router.push("/");
    }
  }

  return (
    <div className="flex h-full flex-col justify-between gap-12">
      <form noValidate onSubmit={handleSubmit} className="flex flex-col gap-10">
        <div>
          <p className="text-body-l leading-[1.6] text-primary">Sign In</p>
          <h1 className="font-poppins text-[32px] leading-[1.2] font-semibold tracking-[-0.01em] text-gray-950 sm:text-[40px] lg:text-heading-m">
            Welcome Back
          </h1>
        </div>

        <div className="flex flex-col gap-6">
          <Input
            label="Email"
            name="email"
            type="email"
            placeholder="designer@example.com"
            value={email}
            onChange={setEmail}
            error={errors.email}
          />
          <Input
            label="Password"
            name="password"
            type="password"
            placeholder="********"
            value={password}
            onChange={setPassword}
            error={errors.password}
          />
          <div className="flex justify-end">
            <Button type="submit">Sign In</Button>
          </div>
        </div>
      </form>

      <div className="flex flex-col items-center gap-10">
        <div className="flex w-full items-center gap-[11px]">
          <span className="h-px max-w-[200px] flex-1 bg-silver" />
          <span className="text-body-l leading-[1.6] text-dim">or</span>
          <span className="h-px max-w-[200px] flex-1 bg-silver" />
        </div>
        <div className="flex gap-4">
          {socialLogins.map((social) => (
            <button
              key={social.name}
              type="button"
              aria-label={`Sign in with ${social.name}`}
              className="flex h-[72px] w-[72px] items-center justify-center rounded-3xl border border-silver transition-colors hover:bg-gray-50"
            >
              <Image src={social.icon} alt="" width={40} height={40} />
            </button>
          ))}
        </div>
      </div>

      <p className="text-center text-body-m leading-[1.6] text-dim">
        New user?{" "}
        <Link href="/register" className="text-primary hover:underline">
          Create an account
        </Link>
      </p>
    </div>
  );
}
