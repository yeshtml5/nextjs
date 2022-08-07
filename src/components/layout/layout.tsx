import { Nav } from "@components/layout";
/**
 * @name Layout
 */
type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <>
      <Nav />
      <main>
        <div>{children}</div>
      </main>
    </>
  );
}
