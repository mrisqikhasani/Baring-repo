import React from "react";
import { Container } from "@mui/material";
import "./mediaDetails.scss";

export default function MediaDetails() {
  return (
    <div className="MediaDetails">
      <Container maxWidth="xl">
        <div className="title-section">
          <h2 className="text-white ">Media</h2>
        </div>
        <div className="backdropSection">
          <div className="mediaBackdrop">
            <img
              src={require("../../Assets/Details/media/media1.png")}
              alt="media"
            />
          </div>
          <div className="mediaBackdrop">
            <img
              src={require("../../Assets/Details/media/media2.png")}
              alt="media"
            />
          </div>
          <div className="mediaBackdrop">
            <img
              src={require("../../Assets/Details/media/media3.jpg")}
              alt="media"
            />
          </div>
        </div>
        <div className="posterSection">
          <div className="posters">
            <img
              src={require("../../Assets/Details/media/Poster 1.png")}
              alt="media"
            />
          </div>
          <div className="posters">
            <img
              src={require("../../Assets/Details/media/Poster 2.png")}
              alt="media"
            />
          </div>
          <div className="posters">
            <img
              src={require("../../Assets/Details/media/Poster 3.png")}
              alt="media"
            />
          </div>
          <div className="posters">
            <img
              src={require("../../Assets/Details/media/Poster 4.png")}
              alt="media"
            />
          </div>
          <div className="posters">
            <img
              src={require("../../Assets/Details/media/Poster 5.png")}
              alt="media"
            />
          </div>
        </div>
      </Container>
      <div className="line"></div>
    </div>
  );
}
