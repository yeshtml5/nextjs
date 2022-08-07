import Head from "next/head";

type Props = {
  title?: string;
};
export default function Seo({ title }: Props) {
  return (
    <Head>
      <title>{title} | YESHTML5</title>
    </Head>
  );
}
