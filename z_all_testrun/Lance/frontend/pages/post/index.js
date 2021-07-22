import HomePost from "../../components/HomePost";
import Layouttwo from "../../components/Layout/Layouttwo";

import Authcheck from "../../components/authcheck";
import PostDetail from "../../components/PostDetail";
import PostSearch from "../../components/PostSearch";

export const getStaticProps = async () => {
  const fetched_data = await fetch("http://localhost:8000/api/post/data");
  const json_data = await fetched_data.json();
  console.log(json_data);

  return {
    props: { post: json_data },
    // revalidate: 10,
  };
};
function PostListing({ post }) {
  return (
    <Layouttwo>
      <div className="bg-gray-100 md:px-40 md:pt-7">
        <PostSearch />
      </div>
      <div className="bg-gray-100 md:grid gap-2 grid-cols-6 md:px-40 py-5 ">
        <div>Profile Component</div>
        <div className="col-span-4 border  border-gray-300 rounded-lg bg-white">
          <HomePost post={post} />
        </div>
        <div>wow</div>
      </div>
    </Layouttwo>
  );
}
export default PostListing;
// export default Authcheck(PostListing);
