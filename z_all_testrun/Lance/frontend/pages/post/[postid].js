
import withAuth from "../../components/authcheck";
import PostDetail from "../../components/PostDetail";
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
function PostId({ post }) {
  return (
    <div>
      <PostDetail post={post} />
    </div>
  );
}

export default PostDetail;
// export default withAuth(PostId);
