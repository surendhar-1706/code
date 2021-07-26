import "../styles/globals.css";
import Layout from "../components/Layout";
import { SWRConfig } from "swr";
import AuthContextProvider from "../context/AuthContext";
function MyApp({ Component, pageProps }) {
  return (
    <SWRConfig
      value={{
        fetcher: (resource, init) =>
          fetch(resource, init).then((res) => res.json()),
      }}
    >
      <AuthContextProvider>
        <Component {...pageProps} />
      </AuthContextProvider>
    </SWRConfig>
  );
}

export default MyApp;
