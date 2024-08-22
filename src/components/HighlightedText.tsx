import { PropsWithChildren } from "react";

export const HighlightedText = ({ children }: PropsWithChildren) => {
  return (
    <span className="text-shadow text-yellow-300 shadow-yellow-200">
      {children}
    </span>
  );
};
