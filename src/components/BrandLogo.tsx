import { Link } from "next-view-transitions";
import css from "./BrandLogo.module.css";

export const BrandLogo = ({ children }: { children: string }) => {
  return (
    <Link href="/" className={css.flipAnimate}>
      <span className={css.flipElement} data-hover={children}>
        {children}
      </span>
    </Link>
  );
};
