import HomePost from "../../components/HomePost";
import Layouttwo from "../../components/Layout/Layouttwo";

import Authcheck from "../../components/authcheck";
import PostDetail from "../../components/PostDetail";

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
      <div className="bg-gray-100 grid grid-cols-6 px-40 py-5">
        <div>wow</div>
        <div className="col-span-4 rounded-lg bg-white">
          <HomePost post={post} />
        </div>
        <div>wow</div>
      </div>
    </Layouttwo>
  );
}
// export default PostListing;
export default Authcheck(PostListing);
