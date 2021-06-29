import React from "react";
import { useRouter } from "next/router";
function authredirect(WrappedComponent) {
  return () => {
    if (typeof window !== "undefined") {
      const router = useRouter();
      const accessToken = localStorage.getItem("access_token");
      if (accessToken) {
        router.replace("/");
        return null;
      }
      return <WrappedComponent {...props} />;
    }
    return null;
  };
}

export default authredirect;
