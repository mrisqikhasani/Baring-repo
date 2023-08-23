import React from "react";
import { Container } from "@mui/material";
import detailMovieData from "../../datadummy/film/film.json";
import "./mediaDetails.scss";

export default function MediaDetails({ moviesdata }: { moviesdata: any }) {
  return (
    <div className="MediaDetails">
      <Container maxWidth="xl">
        <div className="title-section">
          <h2 className="text-white ">Media</h2>
        </div>
        {moviesdata?.image?.backdrop.length > 0 ? (
          <div className="backdropSection">
            <div className="mediaBackdrop">
              <img
                src={require(`../../Assets/${moviesdata?.image?.backdrop[0]}`)}
                alt="media"
              />
            </div>
            <div className="mediaBackdrop">
              <img
                src={require(`../../Assets/${moviesdata?.image?.backdrop[1]}`)}
                alt="media"
              />
            </div>
            <div className="mediaBackdrop">
              <img
                src={require(`../../Assets/${moviesdata?.image?.backdrop[2]}`)}
                alt="media"
              />
            </div>
          </div>
        ) : (
          <div className="backdropSectionSkeleton">
            <div className="mediaBackdropSkeleton"><p>NOT FOUND</p></div>
            <div className="mediaBackdropSkeleton"><p>NOT FOUND</p></div>
            <div className="mediaBackdropSkeleton"><p>NOT FOUND</p></div>
          </div>
        )}
        {moviesdata?.image?.poster.length > 0 ?(
          <div className="posterSection">
          <div className="posters">
            <img
              src={require(`../../Assets/${moviesdata?.image?.poster[0]}`)}
              alt="media"
            />
          </div>
          <div className="posters">
            <img
              src={require(`../../Assets/${moviesdata?.image?.poster[1]}`)}
              alt="media"
            />
          </div>
          <div className="posters">
            <img
              src={require(`../../Assets/${moviesdata?.image?.poster[2]}`)}
              alt="media"
            />
          </div>
          <div className="posters">
            <img
              src={require(`../../Assets/${moviesdata?.image?.poster[3]}`)}
              alt="media"
            />
          </div>
          <div className="posters">
            <img
              src={require(`../../Assets/${moviesdata?.image?.poster[4]}`)}
              alt="media"
            />
          </div>
        </div>
        ):(
          <div className="posterSectionSkeleton">
            <div className="postersSkeleton"><p>NOT FOUND</p></div>
            <div className="postersSkeleton"><p>NOT FOUND</p></div>
            <div className="postersSkeleton"><p>NOT FOUND</p></div>
            <div className="postersSkeleton"><p>NOT FOUND</p></div>
            <div className="postersSkeleton"><p>NOT FOUND</p></div>
          </div>
        )}
      </Container>
      <div className="line"></div>
    </div>
  );
}
