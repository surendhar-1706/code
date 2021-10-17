import React from "react";
import { MdModeEdit } from "react-icons/md";
function AboutProfile() {
  return (
    <div className="px-4 py-2 ">
      <div className="flex items-center justify-between">
        <div className="font-bold text-xl">
          Python web scraping scripts developer
        </div>
        <div className="font-bold text-xl">$15.00/hr </div>
        <div>
          <button>
            <MdModeEdit
              className="bg-white rounded-full text-gray-600 border border-gray-300 px-0.5 "
              size={25}
            />
          </button>
        </div>
      </div>
      <div>
        I write scripts that scrape data from the static and dynamic web pages
        My expertise are: * Python-Scrapy * Selenium * pandas and regex Projects
        I have worked on : * Real Estate Properites and agents contacts data *
        Extracting images from pngmart for ML purposes * Fetching Youtube data *
        Famouse Ecomerce webites * Jobs from huntr. co etc..
      </div>
    </div>
  );
}

export default AboutProfile;
