import { Link } from "next-view-transitions";
import css from "./BrandLogo.module.css";

export const BrandLogo = ({ children }: { children: string }) => {
  return (
    <h1 className="text-2xl">
      <Link href="/" className={css.flipAnimate}>
        <span className={css.flipElement} data-hover={children}>
          {children}
        </span>
      </Link>
    </h1>
  );
};
