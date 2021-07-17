import React from "react";
import Link from "next/link";
function HomePost({ post }) {
  return (
    <div>
      {post.map((data) => {
        return (
          <div key={data.id}>
            <div>{data.id}</div>
            <div>{data.title}</div>
            <div>{data.description}</div>
            <div>{data.categroy}</div>
            <div>{data.weekly_length}</div>
            <div>{data.total_length}</div>
            <Link href={"/post/" + data.id}>View</Link>
          </div>
        );
      })}
    </div>
  );
}

export default HomePost;
