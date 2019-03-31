//* core
import React from "react";

//* Layout
import Header from "./header";
import Footer from "./footer";

//* styled
import "../../styles/common.scss";
import "../../styles/layout.scss";

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <Header />
      <main>
        <div className="info">LOGIN</div>
        <div className="content card">{children}</div>
        <Footer />
      </main>
    </React.Fragment>
  );
};

export default Layout;
