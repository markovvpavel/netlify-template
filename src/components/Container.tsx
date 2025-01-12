import { WithChildren } from "@/types";
import clsx from "clsx";

type Props = { className: string } & WithChildren;

export const Container = ({ children, className }: Props) => {
  return <div className={clsx(className, "container mx-auto")}>{children}</div>;
};
