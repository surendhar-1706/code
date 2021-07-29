import "../styles/globals.css";
import Layout from "../components/Layout";
import { SWRConfig } from "swr";
import { AnimatePresence } from "framer-motion";
import AuthContextProvider from "../context/AuthContext";
function MyApp({ Component, pageProps, router }) {
  return (
    // <SWRConfig
    //   value={{
    //     fetcher: (resource, init) =>
    //       fetch(resource, init).then((res) => res.json()),
    //   }}
    // >

    <AuthContextProvider>
      <AnimatePresence>
        {" "}
        <Component {...pageProps} key={router.key} />
      </AnimatePresence>
    </AuthContextProvider>
  );
}

export default MyApp;
