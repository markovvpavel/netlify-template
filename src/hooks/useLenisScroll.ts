import { useEffect, useRef } from "react";
import Lenis, { LenisOptions } from "@studio-freight/lenis";

export const useLenisScroll = (enabled: boolean = true) => {
  const scrollRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!enabled || !scrollRef.current) return;

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => 1 - Math.pow(1 - t, 3),
      wrapper: scrollRef.current,
      gestureDirection: "vertical",
    } as LenisOptions);

    const animate = (time: number) => {
      lenis.resize();
      lenis.raf(time);
      requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);

    return () => {
      lenis.destroy();
    };
  }, [enabled, scrollRef.current]);

  return scrollRef;
};
