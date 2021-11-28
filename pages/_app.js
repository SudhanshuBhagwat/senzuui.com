import { Fragment } from "react";
import "./styles.css";

function MyApp({ Component, pageProps }) {
  const Layout = Component.layoutProps?.Layout || Fragment;
  const layoutProps = Component.layoutProps?.Layout
    ? { layoutProps: Component.layoutProps }
    : {};

  return (
    <Layout {...layoutProps} {...pageProps}>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
