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
    <>
      <Header />
      <Nav />
      <main className={layout.container}>{children}</main>
      <Footer />
    </>
  );
}
