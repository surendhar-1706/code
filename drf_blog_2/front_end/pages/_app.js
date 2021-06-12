import "../styles/globals.css";
import Layout from "../src/components/Layout";
function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Layout>
        <div>
          <Component {...pageProps} />
        </div>
      </Layout>
    </div>
  );
}

export default MyApp;
