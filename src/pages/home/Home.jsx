import React from "react";
import { livescoreData, scheduleData } from "./data";
import {
  RiArrowRightLine,
  RiArrowRightSFill,
  RiCalendarEventLine,
  RiCalendarLine,
  RiCalendarTodoLine,
  RiStarLine,
} from "react-icons/ri";
import imgEng from "../../assets/england.jpg";
import { useGetLivescoreQuery } from "./livescoreApislice";
import Livescore from "./Livescore";
import { Link } from "react-router-dom";
// import { far } from 'react-icons/fa'
import { ImSad, ImSpinner } from "react-icons/im";

const Home = () => {
  const {
    data: livescoreData,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetLivescoreQuery({
    refetchOnReconnect: true,
    refetchOnFocus: true,
  });

  let content;

  if (isLoading) {
    content = (
      <div className="">
        <ImSpinner className="mx-auto animate-spin text-violet-700 text-4xl mt-[200px]" />
      </div>
    );
  }
  if (isError) {
    content = (
      <div className="">
        <ImSad className="mx-auto animate-pulse text-gray-400 text-8xl mt-[100px]" />
        <p className="text-2xl text-center text-gray-400">
          {error?.data?.message || "Sorry no data found"}
        </p>
      </div>
    );
  }

  if (isSuccess) {
    content = [Array.isArray(livescoreData) || []].map((v, i) => {
      const url = `${v.country_name}/${v.league_name?.replace("%", "-")}/${
        v.match_hometeam_name
      }vs${v.match_awayteam_name}/${v.match_id}/match`;
      return (
        <Link to={url}>
          <Livescore data={v} />
        </Link>
      );
    });
  }

  const schduleContent = scheduleData.map((v, i) => {
    return (
      <div className="text-[#181818] font-bold text-xs flex flex-col items-center">
        <span>{v.title}</span>
        <span>{v.date}</span>
      </div>
    );
  });

  return (
    <div>
      <div className="flex justify-between px-2 py-3 border-b-[1px]  border-gray-300">
        <span className="bg-[#AAAAAA] text-white inline p-2 text-sm rounded-xl font-bold">
          LIVE
        </span>
        {schduleContent}
        <span className="text-gray-500 inline  text-2xl p-2 rounded-xl font-bold">
          <RiCalendarTodoLine />
        </span>
      </div>
      <div className="leagues my-3 ">
        <div className="flex items-center gap-3 mt-2 mb-2 justify-between px-2 bg-slate-200 rounded-lg">
          <div className="flex items-center gap-3 justify-between  text-[#181818] font-bold">
            <img src={imgEng} alt="" width={"24px"} className="shadow-lg" />
            <span>
              <p>Premier League</p>
              <p className="text-sm text-gray-400">England</p>
            </span>
          </div>
          <span className="text-black">
            <RiArrowRightSFill />
          </span>
        </div>
        <div className="">{content}</div>
      </div>
    </div>
  );
};

export default Home;
