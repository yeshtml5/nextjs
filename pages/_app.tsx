import type { AppProps } from "next/app";
import { Layout } from "components/layout";
// Styles
import "styles/globals.css";

function App({ Component, pageProps }: AppProps) {
  return (
    <Layout {...pageProps}>
      <Component {...pageProps} />
    </Layout>
  );
}

export default App;
