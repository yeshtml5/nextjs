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
      {/* {debug(props)} */}
      <Header />
      <div className={layout.container_wrapper}>
        <nav className={layout.container_nav}>
          <Nav />
        </nav>
        <main className={layout.container}>{children}</main>
      </div>
      <Footer />
    </>
  );
}
