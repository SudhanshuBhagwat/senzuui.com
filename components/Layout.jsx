import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children, layoutProps }) => {
  return (
    <div className="max-w-8xl mx-auto">
      <div className="layout">
        <Head>
          <title>{layoutProps.title}</title>
        </Head>
        <Header />
        <main className="px-6">{children}</main>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
