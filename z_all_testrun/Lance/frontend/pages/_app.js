import "../styles/globals.css";
import AuthContextProvider from "../context/AuthContext";
function MyApp({ Component, pageProps, router }) {
  return (
    <AuthContextProvider>
      <Component {...pageProps} key={router.key} />
    </AuthContextProvider>
  );
}

export default MyApp;
