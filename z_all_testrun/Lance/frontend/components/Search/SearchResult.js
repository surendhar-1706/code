import React, { useState } from "react";
import Link from "next/link";
import { BiDislike } from "react-icons/bi";
import { VscHeart } from "react-icons/vsc";
import { RiHeartFill } from "react-icons/ri";
import ShowMoreText from "react-show-more-text";
import PostDate from "../PostComponents/PostDate";
function SearchResult({ data }) {
  const [liked, setliked] = useState(false);
  return (
    <div>
      {data &&
        data.results.map((data) => {
          return (
            <div className="py-2 group hover:bg-gray-50" key={data.id}>
              <div className="px-10 mt-2 mb-6 flex justify-between  flex-wrap items-center">
                <div className="   group-hover:text-green-600  hover:underline  font-semibold text-lg">
                  <Link
                    scroll={false}
                    href={`?postid=${data.id}`}
                    as={`/post/${data.id}`}
                  >
                    <a
                      onClick={async () => {
                        setpstid(data.id);
                        console.log(
                          modalstate,
                          "printing modalstate from title click button expected -> true"
                        );
                        setmodalstate(true);
                        console.log(
                          "printing modalcontext_create",
                          GlobalModalState
                        );
                        console.log(
                          "going to trigger dispatch------------------------------"
                        );
                        dispatch({
                          type: "setopen",
                        });
                        console.log(
                          !router.query.id,
                          "router query id expected->true"
                        );
                      }}
                    >
                      {data.title}
                    </a>
                  </Link>
                </div>
                <div className="flex items-center gap-x-2">
                  <BiDislike className="bg-white p-2 border border-gray-400 rounded-full h-9 w-9" />
                  {liked ? (
                    <RiHeartFill
                      onClick={() => {
                        setliked(false);
                      }}
                      className="text-gray-500 bg-white p-2 border border-gray-400 rounded-full h-9 w-9"
                    />
                  ) : (
                    <VscHeart
                      onClick={() => {
                        setliked(true);
                      }}
                      className="bg-white p-2 border border-gray-400 rounded-full h-9 w-9"
                    />
                  )}
                </div>
              </div>
              <div className="pl-10 text-gray-500  flex flex-wrap items-center text-xs gap-1">
                <div className="font-semibold text-gray-700">
                  {data.pay_type}-
                </div>
                <div className="font-semibold text-gray-700">
                  {data.from_price && <div> ${data.from_price}-</div>}
                </div>
                <div className="font-semibold text-gray-700">
                  {data.to_price && <div> ${data.to_price}</div>}
                </div>
                <div>
                  {data.fixed_price && <div> ${data.fixed_price}-</div>}
                </div>
                <div>{data.freelancer_type}-</div>
                <div>{data.total_length},</div>
                <div>{data.weekly_length}</div>
                <div>
                  <PostDate date={data.date_created} />
                </div>
              </div>

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
              <div className=" px-10 flex flex-wrap">
                {data.skill.map((skill) => {
                  return (
                    <div className="" key={skill.id}>
                      <div className="bg-gray-100 text-gray-700 hover:bg-gray-300 rounded-full  px-2 mr-2 my-1">
                        {skill.name}
                      </div>
                    </div>
                  );
                })}
              </div>
              <hr></hr>
            </div>
          );
        })}
    </div>
  );
}

export default SearchResult;
