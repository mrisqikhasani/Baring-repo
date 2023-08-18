import React from "react";
import "./heroDetail.scss";

export default function HeroDetail() {
  return (
    <div className="HeroDetails">
      <div className="imageBackgroud">
        <img
          src={require("../../Assets/Details/background.jpg")}
          alt="background" className="wideBackround"
        />
        <img
          src={require("../../Assets/Details/mobileBackground.jpg")}
          alt="background" className="mobileBackground"
        />
        <div className="overlayDetails"></div>
      </div>
      <div className="posterDetails">
        <img
          src={require("../../Assets/Details/PosterDetails.png")}
          alt="poster"
        />
      </div>
      <div className="textDetails">
        <h2 className=" text-white font-medium text-3xl">
          20th Century Girl
          <span className="font-normal text-2xl ml-0.5 text-slate-50 max-[426px]:text-base">
            {" "}
            (2022)
          </span>
        </h2>
        <div className="text-wrapper-details">
          <ul className="list-wrapper-details max-[426px]:text-xs">
            <li>10/06/2022</li>
            <li>Movie</li>
            <li>1h59m</li>
            <li>Korea</li>
          </ul>
        </div>
        <div className="overview text-white mt-7 max-[426px]:mt-1">
          <h3 className="text-xl font-medium md:text-lg max-[426px]:text-sm">Overview</h3>
          <p className="font-light text-base mt-2.5 mr-2.5 md:text-sm max-[426px]:mr-px max-[426px]:text-xs">
            Yeon-du asks her best friend Bora to collect all the information she
            can about Baek Hyun-jin while she is away in the U.S. for heart
            surgery. Bora decides to get close to Baek's best friend, Pung
            Woon-ho first. However, Bora's clumsy plan unfolds in an unexpected
            direction. In 1999, a year before the new century, Bora, who turns
            seventeen, falls into the fever of first love.
          </p>
          <p className="genre mt-5 md:text-sm max-[426px]:text-xs max-[426px]:mt-0.5">
            Romance, Drama
          </p>
        </div>
      </div>
    </div>
  );
}
