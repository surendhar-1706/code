import { useRouter } from "next/router";

function PostDetail({ post, setmodalstate }) {
  const router = useRouter();
  const changemodalstate = () => {
    setmodalstate(false);
  };
  return (
    <div>
      <button
        onClick={() => {
          console.log("button triggered");
          setmodalstate(false);
          router.push("/post", undefined, { shallow: true });
        }}
        className="bg-green-300 px-2 py-1 rounded-full"
      >
        back
      </button>
      <p>{post.id}</p>
      <p>{post.title}</p>
      <div>{post.description}</div>
      <div>{post.categroy}</div>
      <div>{post.weekly_length}</div>
      <div>{post.total_length}</div>
    </div>
  );
}

export default PostDetail;
