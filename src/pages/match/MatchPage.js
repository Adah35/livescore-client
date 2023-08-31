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
import { FaRegCalendarAlt } from "react-icons/fa";
import { GiSoccerField, GiWhistle } from "react-icons/gi";
import { BsStar } from "react-icons/bs";
import { MdOutlineStadium } from "react-icons/md";
import TopAdsSection from "../home/TopAdsSection";
import gal from "../../assets/galatasary.png";
import aek from "../../assets/molde.png";
import cl from "../../assets/champions-league.png";
import { Link } from "react-router-dom";
import bet from "../../assets/bet9ja.png";
const MatchPage = () => {
  const catLinks = "bg-[#222] text-sm font-bold p-2 rounded-full";

  return (
    <div className="container mx-auto px-3">
      <div className="flex items-center  justify-center py-3 gap-3">
        <TopAdsSection />
      </div>

      <div className="flex gap-3 text-white">
        <div className="hidden lg:flex w-3/12 border-[1px] border-gray-300 px-2 py-3 rounded-lg">
          <CountryList />
        </div>

        <div className="w-full lg:w-6/12 md:w-9/12 border-[1px] border-gray-300 px-2 py-3 rounded-lg">
          <div className="w-full flex items-center justify-between p-4 shadow-sm rounded border border-gray-300">
            <div className="flex gap-2 items-center">
              <img src={cl} className="w-[2rem] h-[2rem]" alt="cl" />
              <div className="flex flex-col gap-1">
                <span className="text-sm font-bold text-[#000]">
                  Qualifications
                </span>
                <span className="text-[0.7rem] font-semibold text-[#181818]">
                  Champions League
                </span>
              </div>
            </div>
            <div className="flex gap-[2.5rem] items-center">
              <GiSoccerField className="text-[2rem] font-bold text-[#000]" />
              <BsStar className="text-[1.3rem] font-bold text-[#000]" />
            </div>
          </div>
          <div className="w-full flex justify-center items-center gap-[7rem] shadow-md rounded p-4">
            <div className="flex flex-col items-center justify-center gap-2">
              <img className="w-[4rem] h-[4rem]" src={gal} alt="team1" />
              <span className="text-md font-semibold text-[#181818]">
                Galatasary
              </span>
            </div>
            <div className="flex flex-col gap-1 items-center justify-center pt-1">
              <span className="text-[1.5rem] font-bold text-[#000]">12:00</span>
              <span className="text-[0.7rem] font-semibold text-[#181818]">
                Agg: 2 - 0
              </span>
              <span className="text-[0.7rem] font-semibold text-[#181818]">
                Today
              </span>
            </div>
            <div className="flex flex-col items-center justify-center gap-2">
              <img className="w-[4rem] h-[4rem]" src={aek} alt="team2" />
              <span className="text-md font-semibold text-[#181818]">
                Molde FK
              </span>
            </div>
          </div>
          <div className="flex gap-3 text-md font-semibold text-[#181818] mt-4">
            <Link to="" className="hover:text-blue-500">
              Info
            </Link>
            <Link to="" className="hover:text-blue-500">
              Predictions
            </Link>
            <Link to="" className="hover:text-blue-500">
              Line-ups
            </Link>
            <Link to="" className="hover:text-blue-500">
              Table
            </Link>
            <Link to="" className="hover:text-blue-500">
              News
            </Link>
            <Link to="" className="hover:text-blue-500">
              H2H
            </Link>
          </div>
          <div className="mt-4">
            <span className="text-md font-bold text-[#181818]">MATCH INFO</span>
            <div className="flex justify-center gap-[2rem] mt-2 p-3 py-4 border border-gray-300">
              <div className="flex gap-3 items-center">
                <FaRegCalendarAlt className="text-[1.2rem] font-semibold text-[#181818]" />
                <span className="text-md font-semibold text-[#181818]">
                  1 Sep 2023
                </span>
              </div>
              <div className="flex gap-3 items-center">
                <GiWhistle className="text-[1.3rem] font-semibold text-[#181818]" />
                <span className="text-md font-semibold text-[#181818]">
                  Paul Tierney (England)
                </span>
              </div>
              <div className="flex gap-3 items-center">
                <MdOutlineStadium className="text-[1.3rem] font-semibold text-[#181818]" />
                <span className="text-md font-semibold text-[#181818]">
                  Kenilworth Road
                </span>
              </div>
            </div>
          </div>
          <div className="mt-4">
            <div className="flex justify-around items-center mx-auto px-8 py-2">
              <span className="text-md font-bold text-[#181818]">
                WHO WILL WIN?
              </span>
              <img src={bet} alt="bet9ja logo" className="w-20 h-15" />
            </div>
            <div className="w-full flex justify-center items-center gap-[7rem] p-4">
              <div className="flex flex-col items-center justify-center gap-2 border border-gray-400 rounded-full p-4 hover:bg-gray-300">
                <img className="w-[3rem] h-[3rem]" src={gal} alt="team1" />
              </div>
              <div className="border border-gray-400 rounded-[50%] px-3 py-4 hover:bg-gray-300">
                <span className="w-[2.5rem] h-[2.5rem] text-md font-semibold text-[#181818]">
                  Draw
                </span>
              </div>
              <div className="flex flex-col items-center justify-center gap-2 border border-gray-400 rounded-full p-4 hover:bg-gray-300">
                <img className="w-[3rem] h-[3rem]" src={aek} alt="team2" />
              </div>
            </div>
          </div>
        </div>
        <div className="hidden lg:flex w-3/12 border-[1px] border-gray-300 px-2 py-3 rounded-lg">
          <AdsSection />
        </div>
      </div>
    </div>
  );
};

export default MatchPage;
