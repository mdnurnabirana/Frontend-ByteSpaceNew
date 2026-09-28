"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Logo from "@/components/shared/Logo";
import Container from "@/components/ui/Container";
import { navLinks } from "@/constants/navigation";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="absolute top-0 left-0 z-30 w-full">
      <Container className="relative flex h-[88px] items-center justify-between lg:h-[120px]">
        <div className="lg:mb-[13px] lg:ml-[2px]">
          <Logo />
        </div>

        <nav className="absolute left-1/2 hidden -translate-x-1/2 items-start gap-6 lg:flex">
          {navLinks.map((link, index) => (
            <Link
              key={link.label}
              href={link.href}
              className={`text-body-m text-gray-50 transition-colors hover:text-lime ${index === 0 ? "leading-[1.2] font-medium" : "leading-[1.6]"}`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-6 lg:flex">
          <Link href="/login" className="text-body-m leading-6 text-gray-50 hover:text-lime">
            Sign In
          </Link>
          <Link href="/register" className="text-body-m leading-6 text-gray-50 hover:text-lime">
            Join Us
          </Link>
          <button type="button" aria-label="Cart">
            <Image src="/icons/bag.svg" alt="" width={24} height={24} />
          </button>
        </div>

        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 lg:hidden"
        >
          <span className={`h-0.5 w-6 bg-gray-50 transition-transform ${menuOpen ? "translate-y-2 rotate-45" : ""}`} />
          <span className={`h-0.5 w-6 bg-gray-50 transition-opacity ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`h-0.5 w-6 bg-gray-50 transition-transform ${menuOpen ? "-translate-y-2 -rotate-45" : ""}`} />
        </button>
      </Container>

      {menuOpen && (
        <div className="mx-4 rounded-2xl bg-white p-6 shadow-lg sm:mx-6 lg:hidden">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-body-m font-medium text-gray-950"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="mt-6 flex gap-3 border-t border-gray-100 pt-6">
            <Link
              href="/login"
              className="flex-1 rounded-3xl border border-gray-200 py-3 text-center font-medium text-gray-950"
            >
              Sign In
            </Link>
            <Link
              href="/register"
              className="flex-1 rounded-3xl bg-lime py-3 text-center font-medium text-gray-950"
            >
              Join Us
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
