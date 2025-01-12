import { useLenisScroll } from "@/hooks/useLenisScroll";
import { WithChildren } from "@/types";

export const Page = ({ children }: WithChildren) => {
  const scrollRef = useLenisScroll();

  return (
    <article className="h-[calc(100dvh-60px)] w-screen overflow-y-scroll" ref={scrollRef}>
      {children}
    </article>
  );
};
