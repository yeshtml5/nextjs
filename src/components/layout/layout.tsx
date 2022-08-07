/**
 * @name Layout
 */
type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <main>
      <div>{children}</div>
    </main>
  );
}
