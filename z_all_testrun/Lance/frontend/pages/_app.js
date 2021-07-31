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

    <AnimatePresence
      exitBeforeEnter
      onExitComplete={() => {
        console.log("onexit complete triggered -------------------------");
        // setmodalstate(false);
      }}
    >
      <AuthContextProvider>
        <Component {...pageProps} key={router.key} />
      </AuthContextProvider>
    </AnimatePresence>
  );
}

export default MyApp;
