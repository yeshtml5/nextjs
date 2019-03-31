import Document, { Head, Main, NextScript } from "next/document";

class Doc extends Document {
  render() {
    return (
      <html>
        <Head>
          <link
            rel="stylesheet"
            href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
            integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
            crossOrigin="anonymous"
          />
        </Head>
        <body>
          <header>header</header>
          <main>
            <Main />
          </main>
          <footer>
            <NextScript />
          </footer>
        </body>
      </html>
    );
  }
}
export default Doc;
