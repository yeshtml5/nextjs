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
      <main>{children}</main>
      <Footer />
    </React.Fragment>
  );
};

export default Layout;
