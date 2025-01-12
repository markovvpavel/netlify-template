import { WithChildren } from "@/types";
import { Menu } from "@/components/Layout/Menu";
import { PageTransition } from "@/components/Page/PageTransition";
import { Header } from "@/components/Layout/Header";
import { usePersistRedux } from "@/hooks/usePersistRedux";

export const Layout = ({ children }: WithChildren) => {
  usePersistRedux();

  return (
    <main className="h-screen w-screen overflow-hidden">
      <Menu />
      <Header />
      <PageTransition>{children}</PageTransition>
    </main>
  );
};
