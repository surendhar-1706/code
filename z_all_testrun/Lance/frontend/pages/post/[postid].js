import React from "react";
import withAuth from "../../components/authcheck";
export const getStaticPaths = async () => {
  const fetched_data = await fetch("http://localhost:8000/api/post/data");
  const json_data = await fetched_data.json();
  console.log(json_data);
  const paths = json_data.map((data) => {
    return {
      params: { postid: data.id.toString() },
    };
  });
  return {
    paths,
    fallback: false,
  };
};
export const getStaticProps = async (context) => {
  const id = context.params.postid;
  const res = await fetch("http://localhost:8000/api/post/data/" + id);
  const data = await res.json();
  return {
    props: { post: data },
  };
};
function PostDetail({ post }) {
  return (
    <div>
      <p>{post.id}</p>
      <p>{post.title}</p>
      <div>{post.description}</div>
      <div>{post.categroy}</div>
      <div>{post.weekly_length}</div>
      <div>{post.total_length}</div>
    </div>
  );
}

// export default PostDetail;
export default withAuth(PostDetail);
