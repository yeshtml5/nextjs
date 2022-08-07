import Link from "next/link";
import { useRouter } from "next/router";

export default function NavBar() {
  const router = useRouter();
  return (
    <nav>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/common/test">
        <a>Test</a>
      </Link>
    </nav>
  );
}
