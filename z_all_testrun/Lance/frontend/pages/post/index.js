import HomePost from "../../components/HomePost";
import Layouttwo from "../../components/Layout/Layouttwo";
import useSWR from "swr";
import { AnimatePresence } from "framer-motion";
import PostSearch from "../../components/PostSearch";
import MostRecent from "../../components/PostComponents/MostRecent";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
const fetcher = (url) => fetch(url).then((r) => r.json());
function PostListing(props) {
  const { authstate, dispatch } = useContext(AuthContext);

  const { data, error } = useSWR(
    "http://localhost:8000/api/post/data",
    fetcher,
    { dedupingInterval: 300000 }
  );
  useEffect(async () => {
    console.log(
      authstate.isAuthenticated,
      "printing authstate from post index"
    );
    const access_token = localStorage.getItem("access_token");
    if (access_token) {
      dispatch({
        type: "authenticated",
      });
      console.log(authstate, "printing authstate from post index.js");
    }
  }, []);
  return (
    <AnimatePresence
      exitBeforeEnter
      onExitComplete={() => {
        console.log(
          "onexit complete triggered from post index page -------------------------"
        );
      }}
    >
      <Layouttwo>
        <div className="bg-gray-100 sm:px-20 md:px-40 md:pt-7">
          <PostSearch />
        </div>
        <div className="bg-gray-100 md:grid gap-2 grid-cols-6 sm:px-20 md:px-40 py-5 ">
          <div className="">
            <MostRecent />
          </div>
          <div className="col-span-4 border  border-gray-300 rounded-lg bg-white">
            {authstate.isAuthenticated && data && <HomePost post={data} />}
          </div>
          <div>wow</div>
        </div>
      </Layouttwo>
    </AnimatePresence>
  );
}
export default PostListing;
// export default Authcheck(PostListing);
// export default CheckAuth(PostListing);
