import React from "react";
import CastItem from "./CastItem";
import dataCast from "../../datadummy/castDetails/castDetails.json";
import { Container } from "@mui/material";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

export default function CastDetails() {
  const responsive = {
    0: { items: 1 },
    375: { items: 2 },
    425: { items: 2 },
    568: { items: 4 },
    1024: { items: 8 },
  };

  return (
    <div className="CastDetails mt-5">
      <Container maxWidth="xl">
        <div className="title-section">
          <h2 className="text-white m-5 ">Cast</h2>
        </div>
        <div className="castSection">
          <AliceCarousel
            
            disableDotsControls
            responsive={responsive}
          >
            {dataCast.map((cast) => (
              <CastItem castdata={cast} />
            ))}
          </AliceCarousel>
        </div>
      </Container>
    </div>
  );
}
