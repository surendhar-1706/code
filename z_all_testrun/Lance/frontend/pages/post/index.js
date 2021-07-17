import HomePost from "../../components/HomePost";
import Layouttwo from "../../components/Layout/Layouttwo";

import Authcheck from "../../components/authcheck";
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
      <div className="font-bold  bg-gray-100">
        <HomePost post={post} />
      </div>
    </Layouttwo>
  );
}
// export default PostListing;
export default Authcheck(PostListing);
