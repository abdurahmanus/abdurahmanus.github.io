import type { PropsWithChildren } from "react";

export const Background = ({
  children,
  color = "bg-transparent",
}: PropsWithChildren<{ color?: string }>) => (
  <div className={`absolute inset-0 -z-50 ${color}`}>{children}</div>
);
