import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

function google() {
  const router = useRouter();

  useEffect(async () => {
    const { state } = router.query;
    const { code } = router.query;
    console.log(state, "now printing state");
    console.log(code, "now printing code");

    if (state && code) {
      var encode_data = new URLSearchParams();
      encode_data.append("state", state);
      encode_data.append("code", code);

      console.log(state, code);
      try {
        const fetched_data = await fetch(
          "http://localhost:8000/auth/o/google-oauth2/",
          {
            method: "post",
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
            },
            body: encode_data,
          }
        );
        console.log("fetched_data", fetched_data);
        const json_data = await fetched_data.json();
        console.log(json_data);
        // router.push("/");
      } catch (err) {
        console.log("from catch", err);
      }
    }
  });
  return (
    <div>
      <p>Wow</p>
    </div>
  );
}

export default google;
