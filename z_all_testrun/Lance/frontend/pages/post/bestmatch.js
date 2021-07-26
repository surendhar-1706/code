import HomePost from "../../components/HomePost";
import Layouttwo from "../../components/Layout/Layouttwo";
import useSWR from "swr";

import PostDetail from "../../components/PostDetail";
import PostSearch from "../../components/PostSearch";
import { useEffect, useState } from "react";
import MostRecent from "../../components/PostComponents/MostRecent";
const fetcher = (url) => fetch(url).then((r) => r.json());
function BestMatches(props) {
  const { data, error } = useSWR(
    "http://localhost:8000/api/post/data",
    fetcher,
    { dedupingInterval: 300000 }
  );
  // const [data, setdata] = useState();
  // useEffect(async () => {
  //   const fetched_data = await fetch("http://localhost:8000/api/post/data");
  //   const json_data = await fetched_data.json();
  //   setdata(json_data);
  // }, []);
  return (
    <Layouttwo>
      <div className="bg-gray-100 md:px-40 md:pt-7">
        <PostSearch />
      </div>
      <div className="bg-gray-100 md:grid gap-2 grid-cols-6 md:px-40 py-5 ">
        <div>
          <MostRecent />
        </div>
        <div className="col-span-4 border  border-gray-300 rounded-lg bg-white">
          {data && <HomePost post={data} />}
        </div>
        <div>wow</div>
      </div>
    </Layouttwo>
  );
}
export default BestMatches;
// export default Authcheck(PostListing);
