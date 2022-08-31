/**
 * @name Nav
 */
import Link from "next/link";
import { useRouter } from "next/router";
import styled from "styled-components";

export default function NavBar() {
  const router = useRouter();
  return (
    <GNB>
      <div className="logo">YESHTML5 / NEXTJS</div>
      <div className="wrapper">
        <div className="group">
          <Link href="/">
            <a>Home</a>
          </Link>
          <Link href="/_guide">
            <a>Guide</a>
          </Link>
          <Link href="/photos">
            <a>photos</a>
          </Link>
          <Link href="/photos/1">
            <a>photos/[id]</a>
          </Link>
          <Link href="/post/1">
            <a>POST</a>
          </Link>
          <Link href="/common/test">
            <a>Test</a>
          </Link>
          <Link href="/404">
            <a>404</a>
          </Link>
        </div>
      </div>
    </GNB>
  );
}
//*--------------------------------------------------*
const GNB = styled.nav`
  .logo {
    margin: 20px auto;
    text-align: center;
  }
  .wrapper {
    .group {
    }
    .group > a {
      display: block;
      padding: 10px 20px;
      border-bottom: 1px solid #6d7080;
      color: #eee;
      font-size: 16px;
    }
  }
`;
