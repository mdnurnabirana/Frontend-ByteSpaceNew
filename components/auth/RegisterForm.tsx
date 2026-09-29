"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import { emailPattern } from "@/constants/validation";

export default function RegisterForm() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({ name: "", email: "", password: "" });

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const newErrors = { name: "", email: "", password: "" };

    if (!name.trim()) {
      newErrors.name = "Full name is required";
    }

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

    if (!newErrors.name && !newErrors.email && !newErrors.password) {
      router.push("/login");
    }
  }

  return (
    <div className="flex flex-col gap-12 lg:gap-[122px]">
      <form noValidate onSubmit={handleSubmit} className="flex flex-col gap-10">
        <div>
          <p className="text-body-l leading-[1.6] text-primary">Create an Account</p>
          <h1 className="font-poppins text-[32px] leading-[1.2] font-semibold tracking-[-0.01em] text-gray-950 sm:text-[40px] lg:text-heading-m">
            Welcome to ByteSpace
          </h1>
        </div>

        <div className="flex flex-col gap-6">
          <Input
            label="Full Name"
            name="name"
            placeholder="Jamie Davis"
            value={name}
            onChange={setName}
            error={errors.name}
          />
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
            <Button type="submit">Continue</Button>
          </div>
        </div>
      </form>

      <p className="text-center text-body-m leading-[1.6] text-gray-700">
        Already have an account?{" "}
        <Link href="/login" className="text-primary hover:underline">
          Login
        </Link>
      </p>
    </div>
  );
}
