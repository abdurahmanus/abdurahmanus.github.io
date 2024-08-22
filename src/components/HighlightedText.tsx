import { PropsWithChildren } from "react";

export const HighlightedText = ({ children }: PropsWithChildren) => {
  return (
    <span className="text-shadow text-primary-light shadow-primary-light dark:text-primary-dark dark:shadow-primary-dark">
      {children}
    </span>
  );
};
