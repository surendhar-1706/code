import PostDetail from "./PostDetail";
import useSWR from "swr";
const fetcher = (url) => fetch(url).then((r) => r.json());
function PostDetailFetch({ id }) {
  const { data, error } = useSWR(
    "http://localhost:8000/api/post/data/" + id,
    fetcher,
    { dedupingInterval: 300000 }
  );
  return <div>{data ? <PostDetail post={data} /> : "Loading"}</div>;
}

export default PostDetailFetch;
