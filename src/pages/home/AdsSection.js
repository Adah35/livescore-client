import React from "react";
import { adsData } from "./data";

const AdsSection = () => {
  const ads = adsData.map((ad, i) => {
    return (
      <li className="relative">
        <a href="">
          <img className="w-100 h-[41rem]" src={ad.adImg} />
        </a>
      </li>
    );
  });
  return (
    <aside className="flex flex-col">
      <ul className="p-0">{ads}</ul>
    </aside>
  );
};

export default AdsSection;
