import Link from "next/link";
import Head from "next/head";
import Image from "next/image";

const Layout = ({ children, layoutProps }) => {
  return (
    <div className="layout m-auto max-w-5xl">
      <Head>
        <title>{layoutProps.title}</title>
      </Head>
      <header className="flex justify-between items-center px-6 py-4">
        <Link href="/">
          {/* <h1 className="cursor-pointer text-4xl font-bold tracking-wide">
            Senzu UI
          </h1> */}
          <Image src="/Logo.svg" alt="Senzu UI Logo" width="160" height="60" />
        </Link>
        <nav className="select-none">
          <ul className="flex space-x-6">
            <Link href="/docs/hello">Documentation</Link>
            <Link href="/pricing">Pricing</Link>
            <div className="text-red-200">|</div>
            <Link href="/">Sign In</Link>
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
  );
};

export default Layout;
