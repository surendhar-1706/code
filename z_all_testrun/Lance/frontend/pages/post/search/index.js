import React, { useEffect, useState } from "react";
import Head from "next/head";
import useSWR from "swr";
import SearchResult from "../../../components/Search/SearchResult";
import { useRouter } from "next/router";
const fetcher = (url) => fetch(url).then((r) => r.json());
function search() {
  const router = useRouter();
  const { data, error } = useSWR(
    `http://localhost:8000/api/search?title=${router.query.title}`,
    fetcher,
    { dedupingInterval: 300000 }
  );

  return (
    <div>
      {" "}
      <Head>
        <title>Freelance Jobs Online</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <SearchResult data={data} />;
    </div>
  );
}

export default search;
