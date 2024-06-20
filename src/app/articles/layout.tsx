import { Navigation } from "@/components/Navigation";

const articles = [
  {
    href: "/articles/todo",
    label: "Todo article",
  },
];

const ArticlesLayout: React.FC<React.PropsWithChildren> = ({ children }) => (
  <>
    <Navigation links={articles} />
    {children}
  </>
);

export default ArticlesLayout;
