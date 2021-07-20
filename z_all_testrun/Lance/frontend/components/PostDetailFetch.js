import React, { useEffect, useState } from "react";
import PostDetail from "./PostDetail";

function PostDetailFetch({ id }) {
  const [data, setdata] = useState();

  useEffect(async () => {
    console.log("loggin id", id);
    const fetched_data = await fetch(
      "http://localhost:8000/api/post/data/" + id
    );
    const json_data = await fetched_data.json();
    setdata(json_data);
  }, []);
  return <div>{data && <PostDetail post={data} />}</div>;
}

export default PostDetailFetch;
