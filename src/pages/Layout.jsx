import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import AdsSection from "./home/AdsSection";
import CountryList from "./home/CountryList";
import TopAdsSection from "./home/TopAdsSection";
import img from "../assets/logo-removebg-preview.png";
import icon from "../assets/challenge.png";
//
import social1 from "../assets/Line1.jpg";
import social2 from "../assets/Line2.jpg";
import social3 from "../assets/Line3.jpg";
import logo from "../assets/logo-removebg-preview.png";
import arrow from "../assets/arrow-right.jpg";

const Header = () => (
  <div className="header">
    <div className="nav">
      <img src={img} alt="" className="" width={"200px"} />
      <ul>
        <li>About</li>
        <li>FAG</li>
        <li>Terms</li>
        <li>Privacy policy</li>
      </ul>
    </div>
  </div>
);
const LayoutNav = ({ setSection }) => (
  <div className="layout-nav">
    <div className="nav">
      <ul>
        <li
          onClick={() => {
            setSection(0);
          }}
        >
          <img src={icon} />
          News
        </li>
        <li
          onClick={() => {
            setSection(1);
          }}
        >
          <img src={icon} />
          Match
        </li>
        <li
          onClick={() => {
            setSection(2);
          }}
        >
          <img src={icon} />
          Predit
        </li>
        <li
          onClick={() => {
            setSection(3);
          }}
        >
          <img src={icon} />
          Tips
        </li>
        <li
          onClick={() => {
            setSection(4);
          }}
        >
          <img src={icon} />
          Stats
        </li>
      </ul>
    </div>
  </div>
);
const LayoutContent = ({ section }) => (
  <div className="layout-content">
    {section === 0 && (
      <div>
        <h1>News section</h1>
        <p>under construction please check again later</p>
      </div>
    )}
    {section === 1 && (
      <div>
        <h1>Match section</h1>
        <p>under construction please check again later</p>
      </div>
    )}
    {section === 2 && (
      <div>
        <h1>Predict section</h1>
        <p>under construction please check again later</p>
      </div>
    )}
    {section === 3 && (
      <div>
        <h1>Tips section</h1>
        <p>under construction please check again later</p>
      </div>
    )}
    {section === 4 && (
      <div>
        <h1>Stats section</h1>
        <p>under construction please check again later</p>
      </div>
    )}
  </div>
);

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-top">
        <div className="foot foot-1">
          <img src={logo} alt="logo" />
          <div>
            <h4>Info</h4>
            <p>Premium</p>
            <p>Predit</p>
            <p>Top Scorers</p>
            <p>Learn crypto</p>
            <p>Contact</p>
          </div>
        </div>
        <div className="foot foot-2">
          <h4>Contact</h4>
          <p>43252 Borer Mountains</p>
          <p>Zackerychester</p>
          <p>Bahamas</p>
          <p>732-528-4945</p>
        </div>
        <div className="foot foot-3">
          <h4>Newsletter</h4>
          <p>
            Subscribe our newsletter to get more free design course and
            resource.
          </p>
          <div className="email">
            <input
              type="text"
              placeholder="Enter your email"
              style={{ border: "none", paddingLeft: "5px" }}
            />
            <img src={arrow} alt="Newsletter" />
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>Copyright © Football Tic 2023 </p>
        <div className="social">
          <img src={social3} alt="facebook" />
          <img src={social2} alt="twitter" />
          <img src={social1} alt="instagram" />
        </div>
      </div>
    </div>
  );
};

const Layout = () => {
  const [section, setSection] = useState(0);
  return (
    <>
      <Header />
      <div className="main-layout">
        <LayoutNav setSection={setSection} />
        <LayoutContent section={section} />
      </div>
      <Footer />
      {/* <div className="container mx-auto px-3">
        <div className="flex items-center  justify-center py-3 gap-3">
          <TopAdsSection />
        </div>
        <div className="flex gap-3 text-white">
          <div className="hidden lg:flex w-2/12 border-[1px] border-gray-300 px-2 py-3 rounded-lg">
            <CountryList />
          </div>
          <div className="w-full lg:w-7/12 md:w-9/12 border-[1px] border-gray-300 px-2 py-3 rounded-lg">
            <Outlet />
          </div>
          <div className="hidden lg:flex w-3/12 border-[1px] border-gray-300 px-2 py-3 rounded-lg">
            <AdsSection />
          </div>
        </div>
      </div> */}
    </>
  );
};

export default Layout;
