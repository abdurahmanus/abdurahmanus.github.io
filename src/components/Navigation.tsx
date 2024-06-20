import { Link } from "next-view-transitions";

export type NavLink = {
  href: string;
  label: string;
};

export const Navigation: React.FC<{ links: NavLink[] }> = ({ links }) => (
  <nav>
    <ul className="flex gap-2">
      {links.map((l) => (
        <li key={l.href}>
          <Link href={l.href}>{l.label}</Link>
        </li>
      ))}
    </ul>
  </nav>
);
