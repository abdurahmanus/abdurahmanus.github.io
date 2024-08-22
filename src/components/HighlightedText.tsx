import { PropsWithChildren } from "react";

export const HighlightedText = ({ children }: PropsWithChildren) => {
  return (
    <span className="text-shadow text-yellow-200 shadow-yellow-100">
      {children}
    </span>
  );
};
