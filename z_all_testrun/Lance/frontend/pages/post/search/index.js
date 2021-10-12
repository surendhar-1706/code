import React, { useEffect } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
function search() {
  useEffect(async () => {
    const fetched_data = await fetch(
      `http://localhost:8000/api/search?title=${router.query.title}`
    );
    const json_data = await fetched_data.json();
    console.log(json_data);
  });
  const router = useRouter();
  return (
    <div>
      <Head>
        <title>Job Search</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        {/* http://localhost:8000/api/search?title=lor */}
      </Head>
      post search page
      <div>{router.query.title}</div>
    </div>
  );
}

export default search;
