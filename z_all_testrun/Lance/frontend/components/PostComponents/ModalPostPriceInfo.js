import React from "react";
import { IoPricetag } from "react-icons/io5";
import { RiLightbulbFlashLine } from "react-icons/ri";
import { BsFillStopwatchFill } from "react-icons/bs";

function ModalPostPriceInfo({ post }) {
  return (
    <div className="grid grid-cols-3 space-y-3">
      {post.fixed_price && (
        <div className="flex items-center gap-2">
          <IoPricetag />

          <span>
            {post.fixed_price && (
              <div className="font-semibold">
                <span>${post.fixed_price}</span>
              </div>
            )}
            <div className="text-xs text-gray-600">{post.pay_type}</div>
          </span>
        </div>
      )}
      <div className="flex items-center gap-2">
        <RiLightbulbFlashLine />
        <div>
          <span className="font-semibold"> {post.freelancer_type}</span>
          <div className="text-xs text-gray-600">Random things to do</div>
        </div>
      </div>
      {post.weekly_length && <div> {post.weekly_length}</div>}
      <div>{post.total_length}</div>
      {post.from_price && (
        <div>
          <div className="flex items-center gap-x-2">
            <BsFillStopwatchFill />
            <span>
              <span className="flex items-center gap-x-1">
                <div className="font-semibold">
                  {post.from_price && <div> ${post.from_price}-</div>}
                </div>
                <div className="font-semibold">
                  {post.to_price && <div> ${post.to_price}</div>}
                </div>
              </span>
            </span>
          </div>
          <span className="pl-7 text-xs text-gray-600">Hourly</span>
        </div>
      )}
    </div>
  );
}

export default ModalPostPriceInfo;
