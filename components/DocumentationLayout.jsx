import Footer from "./Footer";
import Header from "./Header";
import Head from "next/head";
import Sidebar from "./Sidebar";

const DocumentationLayout = ({ children, layoutProps, ...props }) => {
  return (
    <div>
      <Header />
      <Head>
        <title>{props.title}</title>
      </Head>
      <div className="max-w-8xl mx-auto">
        <main className="grid grid-cols-5 px-6">
          <section
            className="col-span-1 flex flex-col overflow-y-scroll sticky top-16"
            style={{
              height: `calc(100vh - 5rem)`,
            }}
          >
            <Sidebar data={props.docData} />
          </section>
          <section className="ml-4 col-span-4">{children}</section>
        </main>
      </div>
    </div>
  );
};

export default DocumentationLayout;
