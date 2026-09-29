import Ornaments from "@/components/shared/Ornaments";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import { ctaOrnaments } from "@/constants/ornaments";

export default function CreatorCta() {
  return (
    <section id="creators" className="relative overflow-hidden bg-primary lg:h-[488px]">
      <div className="grid-lines absolute inset-0" />

      <div className="absolute top-0 left-1/2 hidden h-[488px] w-[1440px] -translate-x-1/2 lg:block">
        <Ornaments items={ctaOrnaments} />
      </div>

      <Container className="relative flex flex-col items-center gap-8 py-20 text-center text-gray-50 lg:gap-10 lg:pt-[85px] lg:pb-0">
        <h2 className="max-w-[710px] font-poppins text-[32px] leading-[1.2] font-semibold tracking-[-0.01em] sm:text-[40px] lg:text-heading-m">
          Unlock Your Potential as a Creator with ByteSpace
        </h2>
        <p className="max-w-[964px] text-body-m leading-[1.6] sm:text-body-l">
          Experience the collaboration of numerous creators and an expanding selection of courses.
          Register now and become a part of a community comprising over 10,000 local and
          international creators. Utilize our Course Editor, and showcase your expertise by
          publishing your finest course on the ByteSpace Course Library.
        </p>
        <Button href="/register">Join as Creator</Button>
      </Container>
    </section>
  );
}
