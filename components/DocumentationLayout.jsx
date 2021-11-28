import Footer from "./Footer";
import Header from "./Header";
import Head from "next/head";
import Sidebar from "./Sidebar";

const DocumentationLayout = ({ children, layoutProps, ...props }) => {
  return (
    <div className="max-w-8xl mx-auto">
      <div className="layout">
        <Head>
          <title>{props.title}</title>
        </Head>
        <Header />
        <main className="grid grid-cols-5 px-6 divide-x-2">
          <section className="col-span-1">
            <Sidebar data={props.docData} />
          </section>
          <section className="col-span-4">{children}</section>
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default DocumentationLayout;
