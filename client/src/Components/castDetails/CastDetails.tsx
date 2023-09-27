import React from "react";
import CastItem from "./CastItem";
import detailMovieData from "../../datadummy/film/film.json";
import { Container } from "@mui/material";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

export default function CastDetails({ moviesdata }: { moviesdata: any }) {
  // const moviesdata = detailMovieData.find((item) => item.id === 9);

  const responsive = {
    0: { items: 1 },
    375: { items: 2 },
    425: { items: 2 },
    568: { items: 4 },
    1024: { items: 8 },
  };

  const unknowData: string[] = [
    "unknow",
    "unknow",
    "unknow",
    "unknow",
    "unknow",
    "unknow",
    "unknow",
  ];

  return (
    <div className="CastDetails mt-5">
      <Container maxWidth="xl">
        <div className="title-section">
          <h2 className="text-white m-5 ">Cast</h2>
        </div>
        <div className="castSection">
          <AliceCarousel disableDotsControls responsive={responsive}>
            {moviesdata?.cast?.length > 0
              ? moviesdata.cast.map((cast: any, index:any) => (
                  <CastItem
                    key={index}
                    name={cast.name}
                    character={cast.character}
                    imageUrl={cast.imageUrl}
                  />
                ))
              : unknowData.map((unknowdata: any, index) => (
                  <CastItem name={unknowdata} character={unknowdata} key={index}/>
                ))}
          </AliceCarousel>
        </div>
      </Container>
    </div>
  );
}
