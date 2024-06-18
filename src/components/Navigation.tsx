import Link from "next/link";

const links = [
  {
    href: "/",
    label: "Home",
  },
  {
    href: "/articles",
    label: "Articles",
  },
  {
    href: "/about",
    label: "About",
  },
];

export default function Navigation() {
  return (
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
}
