import React from "react";
import "./heroDetail.scss";
import detailMovieData from "../../datadummy/film/film.json";

export default function HeroDetail({ moviesdata }: { moviesdata: any }) {
  return (
    <div className="HeroDetails">
      <div className="imageWrapper">
        <div className="imageBackgroud">
          {moviesdata?.image?.backdrop.length > 0 ? (
            <img
              src={require(`../../Assets/${moviesdata.image.backdrop[2]}`)}
              alt="background"
              className="wideBackground"
            />
          ) : (
            <div
              className="wideBackground"
              style={{
                width: "100%",
                height: "650px",
                backgroundColor: "white",
              }}
            ></div>
          )}

          {moviesdata?.image?.poster ? (
            <div className="anotherBackground">
              <img
                src={require(`../../Assets/${moviesdata.image.poster[1]}`)}
                alt="background"
                className="mobileBackground"
              />
              <img
                src={require(`../../Assets/${moviesdata.image.poster[1]}`)}
                alt="background"
                className="smallMobileBackground"
              />
            </div>
          ) : (
            <div className="anotherBackground">
              <div
                className="mobileBackground1"
                style={{ width: "100%", height: "800px" , backgroundColor:"white"}}
              ></div>
            </div>
          )}

          <div className="addBackground"></div>
          <div className="overlayDetails"></div>
        </div>
      </div>
      <div className="posterDetails">
        <img
          src={require(`../../Assets/${moviesdata?.imageUrl}`)}
          alt="poster"
        />
      </div>
      <div className="textDetails">
        <h2 className=" text-white font-medium text-3xl">
          {moviesdata?.movie_title}
          <span className="font-normal text-2xl ml-0.5 text-slate-50 max-[426px]:text-base">
            {` (${moviesdata?.year})`}
          </span>
        </h2>
        <div className="text-wrapper-details">
          <ul className="list-wrapper-details max-[426px]:text-xs">
            <li>{moviesdata?.date}</li>
            <li>{moviesdata?.isSeries === 0 ? <p>Movie</p> : <p>Series</p>}</li>
            <li>{moviesdata?.duration}</li>
            <li>{moviesdata?.country}</li>
          </ul>
        </div>
        <div className="overview text-white mt-7 max-[426px]:mt-1">
          <h3 className="text-xl font-medium md:text-lg max-[426px]:text-sm">
            Overview
          </h3>
          <p className="font-light text-base mt-2.5 mr-2.5 md:text-sm max-[426px]:mr-px max-[426px]:text-xs">
            {moviesdata?.overview}
          </p>
          <p className="genre mt-5 md:text-sm max-[426px]:text-xs max-[426px]:mt-0.5">
            {moviesdata?.genre?.join(", ")}
          </p>
        </div>
      </div>
    </div>
  );
}
