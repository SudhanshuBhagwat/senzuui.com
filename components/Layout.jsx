import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import { AiOutlineGithub } from "react-icons/ai";

const Layout = ({ children, layoutProps }) => {
  return (
    <div className="max-w-8xl mx-auto">
      <div className="layout">
        <Head>
          <title>{layoutProps.title}</title>
        </Head>
        <header className="flex justify-between items-center px-6 py-4">
          <Link href="/">
            <Image
              src="/Logo.svg"
              alt="Senzu UI Logo"
              width="160"
              height="32"
              className="cursor-pointer"
            />
          </Link>
          <nav className="select-none">
            <ul className="flex space-x-6">
              <li>
                <Link href="/docs/hello">
                  <AiOutlineGithub className="h-8 w-8 cursor-pointer hover:text-gray-800" />
                </Link>
              </li>
            </ul>
          </nav>
        </header>
        <main>{children}</main>
        <footer className="flex justify-center items-center py-4">
          <div>
            <p>
              Made with ❤ by{" "}
              <span className="font-semibold text-blue-600">
                <Link href="https://github.com/SudhanshuBhagwat">
                  Sudhanshu Bhagwat
                </Link>
              </span>
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Layout;
