import { useEffect, useState } from "react";
import Link from "next/link";
import { AiOutlineLoading } from "react-icons/ai";
import { BiLoaderAlt } from "react-icons/bi";
import { BiLoader } from "react-icons/bi";

import ShowMoreText from "react-show-more-text";
import Modal from "react-modal";
import { useRouter } from "next/router";
import PostDetailFetch from "./PostDetailFetch";
Modal.setAppElement("#__next");
function HomePost({ post }) {
  const router = useRouter();
  const [buttonloading, setbuttonloading] = useState(true);
  const [nextpage, setnextpage] = useState(post.next);
  const [postlist, setpostlist] = useState(post.results);
  const [modalstate, setmodalstate] = useState(false);
  const [pstid, setpstid] = useState();

  return (
    <div className=" pt-10 ">
      <p className="font-bold px-10 text-xl">My Feed</p>
      <hr className="mt-7 px-10"></hr>
      <div className="py-3 px-10">My saved category</div>
      <hr></hr>
      {postlist.map((data) => {
        return (
          <div className="py-2 group hover:bg-gray-50" key={data.id}>
            <div className=" px-10 group-hover:text-green-500 font-semibold text-lg">
              <Link
                scroll={false}
                href={`?postid=${data.id}`}
                as={`/post/${data.id}`}
              >
                <a
                  onClick={() => {
                    setmodalstate(true);
                    console.log(data, "printing data");
                    setpstid(data.id);
                    console.log(modalstate, "printing state");
                    console.log(!router.query.id, "router query id");
                  }}
                >
                  {data.title}
                </a>
              </Link>
            </div>
            <div className=" px-10">{data.weekly_length}</div>
            <div className=" px-10">{data.total_length}</div>
            <div className="px-10 ">
              <ShowMoreText
                lines={2}
                more=" more "
                less="less "
                className="text-gray-900"
                anchorClass="text-green-600"
                expanded={false}
              >
                <div> {data.description}</div>
              </ShowMoreText>
            </div>
            <div className=" px-10">{data.category}</div>

            <hr></hr>
          </div>
        );
      })}
      <div className="px-10 py-2">
        <button
          onClick={async () => {
            setbuttonloading(false);
            if (nextpage) {
              const fetched_data = await fetch(nextpage);
              const json_data = await fetched_data.json();
              setpostlist([...postlist, ...json_data.results]);
              setnextpage(json_data.next);
            } else {
              console.log("no next page found pring next page", nextpage);
            }
            setbuttonloading(true);
          }}
          className=" rounded-full pl-4 pr-4 py-1  text-sm  font-bold border text-green-500 border-gray-500 hover:bg-gray-50"
        >
          {buttonloading ? (
            <span className="">Load more Jobs</span>
          ) : (
            <div className="flex items-center ">
              <div className="pr-3">
                {" "}
                <BiLoaderAlt className="animate-spin" />
              </div>

              <span>Load more Jobs</span>
            </div>
          )}
        </button>
      </div>
      <Modal
        isOpen={!router.query.id && modalstate}
        onRequestClose={() => {
          setmodalstate(false);
          router.push("/post", undefined, { shallow: true });
        }}
      >
        <PostDetailFetch id={pstid} setmodalstate={setmodalstate} />
      </Modal>
    </div>
  );
}

export default HomePost;
