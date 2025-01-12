import Image from "next/image";
import { Container } from "@/components/Container";
import { useRouter } from "next/router";
import { useMemo } from "react";
import { useTranslation } from "@/hooks/useTranslation";

type Props = {
  imageSeq: number;
  seq: number;
};

export const Section = ({ imageSeq, seq }: Props) => {
  const { pathname } = useRouter();
  const { t } = useTranslation("components", "pages");

  const page = useMemo(() => {
    if (pathname === "/") return t("home");
    if (pathname === "/about") return t("about");
    if (pathname === "/contact") return t("contact");
  }, [pathname, t]);

  return (
    <section className="h-full w-full px-4 md:px-0">
      <Container className="h-full">
        <div className="h-[90%] w-full relative">
          <Image
            alt={`image-${imageSeq}`}
            className="object-cover"
            fill
            priority
            src={`/assets/image-${imageSeq}.jpg`}
          />
        </div>
        <div className="h-[10%] w-full flex justify-between items-center">
          <span>Page: {page}</span>
          <span>Section: {seq}</span>
        </div>
      </Container>
    </section>
  );
};
