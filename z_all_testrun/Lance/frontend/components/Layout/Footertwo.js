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
    <div>
      <hr />
      <div className="grid grid-cols-4 gap-3">
        <div className="">About Us</div>
        <div className=""> Trust, Safety & Security</div>
        <div className="">Terms of Service</div>
        <div className="">Desktop App</div>
        <div className="">Feedback</div>
        <div className="">Help & Support</div>
        <div className="">Privacy Policy</div>

        <div className="">Cookie Policy</div>
        <div className="">Community</div>
        <div className="">Upwork Foundation</div>
        <div className="">Accessibility</div>
        <div className="">Enterprise Solutions</div>
      </div>
      <hr></hr>
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-2 ">
          <div> Follow us</div>
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
        <div className="flex items-center space-x-2">
          <div>Mobile app</div>
          <div className=" p-1  transform scale-75  text-sm rounded-full bg-gray-200 text-gray-700 hover:bg-gray-300 ">
            <AppleIcon />
          </div>
          <div className=" p-1  transform scale-75  text-sm rounded-full bg-gray-200 text-gray-700 hover:bg-gray-300 ">
            <AndroidOutlinedIcon />
          </div>
        </div>
      </div>
      <hr></hr>
      <div className="flex justify-center ">
        <div>© 2015 - 2021 Upwork® Global Inc.</div>
      </div>
    </div>
  );
}

export default Footertwo;
