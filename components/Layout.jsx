import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children, layoutProps }) => {
  return (
    <div className="layout">
      <Header />
      <Head>
        <title>{layoutProps.title}</title>
      </Head>
      <div className="max-w-8xl mx-auto grid my-auto">
        <main className="px-6">{children}</main>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
