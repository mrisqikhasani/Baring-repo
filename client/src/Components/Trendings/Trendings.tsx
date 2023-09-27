import React, { useState, useEffect } from "react";
import Trending from "./Trending/Trending";
import moviesData from "../../datadummy/trendings/trending.json";
import { Container } from "@mui/material";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import "./trendings.scss";

import fetchAPI from "../../config/api";

interface MovieData{
  id: number;
  title: string;
  backdrop_path: string;
  release_date:string;
}

function Trendings() {
  const [data, setData] = useState<MovieData[] | null>(null);  

  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiData = await fetchAPI();
        setData(apiData.results);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  },[])

  console.log("ini adalah ", data)

  const responsive = {
    0: { items: 1 },
    768: { items: 2 },
    1024: { items: 3 },
  };

  return (
    <>
      <div className="Trendings">
        <Container maxWidth="xl">
          <div className="title-trendings">
            <h2 className="text-white mt-1 mb-10">Trendings</h2>
          </div>
          <AliceCarousel
            mouseTracking
            responsive={responsive}
            disableDotsControls
            autoPlay={true}
            autoPlayInterval={3000}
            infinite
          >
            {data ? (data.map((movie, index) => (
              <Trending movie={movie} key={index} />
            ))
          ):(
            <p>Data null</p>
          )}
          </AliceCarousel>
        </Container>
        <div className="line"></div>
      </div>
    </>
  );
}

export default Trendings;
