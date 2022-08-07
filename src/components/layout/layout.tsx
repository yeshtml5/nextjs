import { Nav, Header, Footer } from "components/layout";
/**
 * @name Layout
 */
type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <>
      <Header />
      <Nav />
      <main>
        <div>{children}</div>
      </main>
      <Footer />
    </>
  );
}
