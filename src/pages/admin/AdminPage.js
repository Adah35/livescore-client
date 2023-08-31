import React from "react";
import AdsSection from "../home/AdsSection";
import CountryList from "../home/CountryList";
import { livescoreData, scheduleData } from "../home/data";
import {
  RiArrowRightLine,
  RiArrowRightSFill,
  RiCalendarEventLine,
  RiCalendarLine,
  RiCalendarTodoLine,
  RiStarLine,
} from "react-icons/ri";

import imgEng from "../../assets/england.jpg";
import TopAdsSection from "../home/TopAdsSection";
import Navbar from "../../components/Navbar";
const AdminPage = () => {
  return (
    <>
      <Navbar />
      <div className="w-full mx-auto px-0">
        <div className="flex gap-4 text-white my-1">
          <div className="relative h-[90vh] w-[18rem] bg-[#0000ff] hidden lg:flex w-3/12 border-[1px] border-gray-300 px-2 py-3 rounded">
            Side Bar
          </div>

          <div className="w-full md:w-9/12 border border-gray-300 px-2 py-3 my-2 rounded"></div>
        </div>
      </div>
    </>
  );
};

export default AdminPage;
