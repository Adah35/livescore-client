import React from "react";
import { countriesData } from "./data";
import { GoSearch } from "react-icons/go";

const CountryList = () => {
  const countries = countriesData.map((c, i) => {
    return (
      <li className="mb-3.5">
        <a
          href=""
          className="text-[#181818] font-semibold text-sm flex flex-row items-center gap-2"
        >
          <img className="w-6 h-5" src={c.cf} alt={c.cn} />
          <span>{c.cn}</span>
        </a>
      </li>
    );
  });
  return (
    <aside className="w-full">
      <div class="relative flex items-center border border-gray-300 rounded px-3 py-2 bg-transparent">
        <GoSearch className="text-[#181818]" style={{ fontSize: "25px" }} />
        <input
          type="text"
          placeholder="Search"
          class="w-full text-md text-[#181818] outline-none pl-3 placeholder-gray-400 bg-transparent"
        />
      </div>

      <ul className="p-4">{countries}</ul>
    </aside>
  );
};

export default CountryList;
