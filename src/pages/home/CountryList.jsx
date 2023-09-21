import React, { useState } from "react";
import { countriesData } from "./data";
import { GoSearch } from "react-icons/go";
import {
  useGetCountryListQuery,
  useGetLeaguesByCountryQuery,
} from "./livescoreApislice";
import { Link } from "react-router-dom";
import {
  RiArrowGoBackLine,
  RiArrowLeftLine,
  RiArrowLeftSLine,
  RiArrowRightSLine,
} from "react-icons/ri";
import { ImSad, ImSpinner } from "react-icons/im";

const CountryLeagues = ({ country_id }) => {
  const { data, isLoading, isSuccess, isError, error } =
    useGetLeaguesByCountryQuery(country_id);
  let content;
  if (isSuccess) {
    data.map((v, i) => {
      return (content = (
        <Link>
          <li className="mb-3.5">
            <Link className="text-[#181818] font-semibold text-sm flex flex-row items-center gap-2">
              <img
                className="w-6 h-5"
                src={v.league_logo}
                alt={v.league_name}
              />
              <span>{v.league_name}</span>
            </Link>
          </li>
        </Link>
      ));
    });
  }
  return content;
};
const Countries = ({ data }) => {
  return (
    <li className="mb-3.5">
      <Link>
        <span className="text-[#181818] font-semibold text-sm flex flex-row items-center gap-2">
          <img
            className="w-6 h-5"
            src={data.country_logo}
            alt={data.country_name}
          />
          <span>{data.country_name}</span>
        </span>
      </Link>
    </li>
  );
};
const CountryList = () => {
  const {
    data: countryData,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetCountryListQuery(undefined, {
    refetchOnReconnect: true,
    refetchOnFocus: true,
  });
  const [selectedCountryId, setSelectedCountryId] = useState(0);
  const [country, setCountry] = useState(null);

  // console.log(selectedCountryId);
  let content;
  const handleCountryClick = (v) => {
    setSelectedCountryId(v.country_id);
    setCountry(v.country_name);
  };

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
        <ImSad className="mx-auto animate-pulse text-gray-400 text2xl mt-[100px]" />
        <p className="text-xl text-center text-gray-400">
          {error?.data?.message || "Sorry no data found"}
        </p>
      </div>
    );
  }

  if (isSuccess) {
    content = (Array.isArray(countryData) || []).map((v, i) => {
      return (
        <span key={i} onClick={() => handleCountryClick(v)}>
          <Countries data={v} />
        </span>
      );
    });
  }

  return (
    <aside className="w-full">
      {!selectedCountryId ? (
        <div className="relative flex items-center border border-gray-300 rounded px-3 py-2 bg-transparent">
          <GoSearch className="text-[#181818]" style={{ fontSize: "25px" }} />
          <input
            type="text"
            placeholder="Search"
            className="w-full text-md text-[#181818] outline-none pl-3 placeholder-gray-400 bg-transparent"
          />
        </div>
      ) : (
        <p
          className="text-[#181818] flex items-center gap-1 text-lg cursor-pointer hover:text-blue-600 font-semibold"
          onClick={() => setSelectedCountryId(null)}
        >
          <RiArrowLeftSLine /> country
        </p>
      )}
      <ul>
        {
          selectedCountryId ? (
            <CountryLeagues country_id={selectedCountryId} /> // Display the leagues for the selected country
          ) : (
            content
          ) // Display the list of countries
        }
      </ul>
    </aside>
  );
};

export default CountryList;
