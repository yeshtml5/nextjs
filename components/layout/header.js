import React from "react";
import Link from "next/link";
const Header = () => {
  return (
    <React.Fragment>
      <header>
        <div className="logo">React.Yeshtml5</div>
        <nav>
          <Link href="/">
            <a>HOME</a>
          </Link>
          <Link href="/example/test">
            <a>test</a>
          </Link>
          <Link href="/example/maps">
            <a>maps</a>
          </Link>
        </nav>
      </header>
    </React.Fragment>
  );
};
export default Header;