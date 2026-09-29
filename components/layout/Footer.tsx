import Link from "next/link";
import Logo from "@/components/shared/Logo";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import { footerColumns, legalLinks } from "@/constants/footer";

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white pt-16 pb-12 xl:pt-[70px]">
      <Container>
        <div className="flex flex-col gap-12 xl:flex-row xl:gap-[92px]">
          <div className="flex flex-col gap-10 xl:w-[528px] xl:shrink-0 xl:gap-[45px]">
            <div className="flex flex-col gap-4">
              <Logo dark />
              <p className="text-body-s leading-[1.6] text-gray-950">
                Stay Up to date with our latest features and releases by joining our newsletter.
              </p>
            </div>

            <div className="flex max-w-[504px] flex-col gap-6">
              <form className="flex flex-col gap-4 sm:flex-row sm:items-start sm:gap-6">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="h-[52px] w-full rounded-full border border-gray-200 bg-white px-6 text-body-m leading-[1.6] text-gray-950 outline-none placeholder:text-gray-950 focus:border-primary sm:w-[376px]"
                />
                <Button type="submit">Search</Button>
              </form>
              <p className="text-body-xs leading-[1.6] text-gray-950">
                By subscribing, you agree to our Privacy Policy and consent to receive updates from
                our company.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 xl:mt-12 xl:flex">
            {footerColumns.map((links, index) => (
              <ul key={index} className="flex flex-col gap-4 xl:w-[167px]">
                {links.map((link) => (
                  <li key={link}>
                    <Link
                      href="#"
                      className="block text-body-s leading-[1.6] text-gray-950 hover:text-primary"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-6 border-t border-gray-200 pt-[22px] sm:flex-row sm:justify-between xl:mt-[130px]">
          <p className="text-body-xs leading-[1.6] text-gray-950">
            @ 2023 ByteSpace. All rights reserved.
          </p>
          <div className="flex flex-wrap gap-6">
            {legalLinks.map((link) => (
              <Link
                key={link}
                href="#"
                className="text-body-xs leading-[1.6] text-gray-950 hover:text-primary"
              >
                {link}
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
}
