import React from "react";
import Link from "next/link";
import ShowMoreText from "react-show-more-text";
import Modal from "react-modal";
import { useRouter } from "next/router";
import PostDetail from "./PostDetail";
import PostDetailFetch from "./PostDetailFetch";
Modal.setAppElement("#__next");
function HomePost({ post }) {
  const router = useRouter();
  return (
    <div className=" pt-10">
      <p className="font-bold px-10 text-xl">My Feed</p>
      <hr className="mt-7 px-10"></hr>
      <div className="py-3 px-10">My saved category</div>
      <hr></hr>
      {post.map((data) => {
        return (
          <div className="py-2 group hover:bg-gray-50" key={data.id}>
            <div className=" px-10 group-hover:text-green-500 font-semibold text-lg">
              <Link href={`?postid=${data.id}`} as={`/post/${data.id}`}>
                <a>{data.title}</a>
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
      <button className="rounded-full px-8 py-1  text-sm  font-bold border text-green-500 border-gray-500 hover:bg-gray-50">
        Load More Jobs
      </button>
      <Modal
        isOpen={!!router.query.postid}
        onRequestClose={() => {
          router.push("/post");
        }}
      >
        <PostDetailFetch id={router.query.postid} />
      </Modal>
    </div>
  );
}

export default HomePost;
