/**
 * @name Layout
 */
import { Nav, Header, Footer } from "components/layout";
import { layout } from "styles";

type Props = {
  props: any;
  children: React.ReactNode;
};

export default function Layout({ children, ...props }: Props) {
  return (
    <div className={layout.container_wrapper}>
      <nav className={layout.container_nav}>
        <Nav />
      </nav>
      <main className={layout.container}>
        <Header />
        {children}
        <Footer />
      </main>
    </div>
  );
}
