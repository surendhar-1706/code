import { useRouter } from "next/router";
import React from "react";

function PostDetail({ post }) {
  const router = useRouter();
  const changemodalstate = () => {
    console.log("button triggered");
    router.query.id = null;
  };
  return (
    <div>
      <button
        onClick={changemodalstate}
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
