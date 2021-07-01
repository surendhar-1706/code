import "../styles/globals.css";
import Layout from "../components/Layout";
import AuthContextProvider from "../context/AuthContext";
function MyApp({ Component, pageProps }) {
  return (
    <AuthContextProvider>
      <Component {...pageProps} />
    </AuthContextProvider>
  );
}

export default MyApp;
