import menu from "../assets/menu.svg";
// import menuX from "../assets/x.svg";
import logo from "../assets/logo.jpg";
const dash1 = "/tabs/dash1.svg";
const dash2 = "/tabs/dash2.svg";
const dash3 = "/tabs/dash3.svg";
const dash4 = "/tabs/dash4.svg";
const dash5 = "/tabs/dash5.svg";
const dash6 = "/tabs/dash6.svg";
const dash7 = "/tabs/dash7.svg";
import { useNavigate } from "react-router-dom";

export const Drawer = () => {
  const navigate = useNavigate();
  return (
    <div className="drawer-container">
      <img
        src={menu}
        onClick={() => {
          const ham = document.getElementById("ham");
          ham?.classList.remove("de-activ");
          ham?.classList.add("active");
        }}
      />
      <div className="drawer" id="ham">
        <img src={logo} style={{ marginBottom: "1rem", width: "120px" }} />
        <div className="top">
          <div className="tab">
            <img src={dash1} alt="tab link" /> <span>Dashboard</span>
          </div>
          <div className="tab">
            <img src={dash2} alt="tab link" /> <span>Wallet</span>
          </div>
          <div className="tab">
            <img src={dash3} alt="tab link" /> <span>Swap</span>
          </div>
          <div className="tab">
            <img src={dash4} alt="tab link" /> <span>Giftcard</span>
          </div>
          <div className="tab">
            <img src={dash5} alt="tab link" /> <span>Utilities</span>
          </div>
        </div>
        <div className="bottom">
          <div className="tab">
            <img src={dash6} alt="tab link" /> <span>Settings</span>
          </div>
          <div
            className="tab"
            onClick={() => {
              navigate("/");
            }}
          >
            <img src={dash7} alt="tab link" /> <span>Log Out</span>
          </div>
        </div>
      </div>
      <div
        className="diesel"
        onClick={() => {
          const ham = document.getElementById("ham");
          ham?.classList.remove("active");
          ham?.classList.add("de-activ");
          console.log(ham);
        }}
      ></div>
    </div>
  );
};
