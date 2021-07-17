import React from "react";
import FacebookIcon from "@material-ui/icons/Facebook";
import AppleIcon from "@material-ui/icons/Apple";
import AndroidOutlinedIcon from "@material-ui/icons/AndroidOutlined";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import TwitterIcon from "@material-ui/icons/Twitter";
import YouTubeIcon from "@material-ui/icons/YouTube";
import InstagramIcon from "@material-ui/icons/Instagram";
function Footertwo() {
  return (
    <div className="md:py-10">
      <div className="md:grid grid-cols-4 gap-3 md:px-40 text-gray-700 text-sm font-thin pb-10">
        <div className="p-1">About Us</div>
        <div className="p-1"> Trust, Safety & Security</div>
        <div className="p-1 pb-5">Terms of Service</div>
        <div className="p-1">Desktop App</div>
        <div className="p-1">Feedback</div>
        <div className="p-1 pb-5">Help & Support</div>
        <div className="p-1">Privacy Policy</div>

        <div className="p-1">Cookie Policy</div>
        <div className="p-1 pb-5">Community</div>
        <div className="p-1">Upwork Foundation</div>
        <div className="p-1">Accessibility</div>
        <div className="p-1">Enterprise Solutions</div>
      </div>
      <div className="md:px-40">
        <hr />
      </div>
      <div className="md:flex justify-between items-center md:pl-40 md:pr-20 py-2 ">
        <div className="flex items-center space-x-2 pb-4">
          <div className="text-gray-700 text-sm font-thin"> Follow us</div>
          <div className=" p-1  transform scale-75  text-sm rounded-full bg-gray-200 text-gray-700 hover:bg-gray-300 ">
            <FacebookIcon />
          </div>
          <div className=" p-1  transform scale-75  text-sm rounded-full bg-gray-200 text-gray-700 hover:bg-gray-300 ">
            <LinkedInIcon />
          </div>
          <div className=" p-1  transform scale-75  text-sm rounded-full bg-gray-200 text-gray-700 hover:bg-gray-300 ">
            <YouTubeIcon />
          </div>
          <div className=" p-1  transform scale-75  text-sm rounded-full bg-gray-200 text-gray-700 hover:bg-gray-300 ">
            <InstagramIcon />
          </div>
        </div>
        <div className="flex items-center space-x-2 md:pr-40 pb-4">
          <div className="text-gray-700 text-sm font-thin">Mobile app</div>
          <div className=" p-1  transform scale-75  text-sm rounded-full bg-gray-200 text-gray-700 hover:bg-gray-300 ">
            <AppleIcon />
          </div>
          <div className=" p-1  transform scale-75  text-sm rounded-full bg-gray-200 text-gray-700 hover:bg-gray-300 ">
            <AndroidOutlinedIcon />
          </div>
        </div>
      </div>
      <div className="md:px-40">
        <hr />
      </div>

      <div className="flex justify-center pt-10 pb-5">
        <div className="text-gray-700 text-sm font-thin ">
          © 2015 - 2021 Upwork® Global Inc.
        </div>
      </div>
    </div>
  );
}

export default Footertwo;
