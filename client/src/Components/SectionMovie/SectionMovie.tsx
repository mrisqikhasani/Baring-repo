import React from "react";
import MovieItem from "../movieItem/MovieItem";
import { Container, Grid } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import "./SectionMovie.scss";

interface Movie {
  id: number;
  movie_title: string;
  year: string;
  imageUrl: string;
  isSeries: number;
}

interface SectionMovierops {
  title?: string;
  moviesdata: Movie[];
  isCarousel: boolean;
  showButtonline?: boolean;
  seeMore: boolean;
}

const SectionMovie: React.FC<SectionMovierops> = ({
  title,
  moviesdata,
  isCarousel = false,
  showButtonline = false,
  seeMore = false,
}) => {
  const responsive = {
    0: { items: 1 },
    425: { items: 2 },
    568: { items: 3 },
    1024: { items: 5 },
    1440: { items: 6 },
  };

  return (
    <div>
      <Container maxWidth="xl">
        <div className="title-section">
          <h2 className="text-white mt-5 ">{title}</h2>
        </div>
        {seeMore && (
          <div className="see-more">
            <a href="/">
              See More <ArrowForwardIosIcon />
            </a>
          </div>
        )}
        {isCarousel ? (
          <AliceCarousel
            mouseTracking
            responsive={responsive}
            disableDotsControls
            autoPlay={true}
            autoPlayInterval={5000}
            infinite
            controlsStrategy="alternate"
          >
            {moviesdata.map((movieitem) => (
              <div>
                <MovieItem moviesdata={movieitem} />
              </div>
            ))}
          </AliceCarousel>
        ) : (
          <Grid container spacing={1} columns={12} className="movie-grid">
            {moviesdata.map((movieitem) => (
              <Grid item>
                <MovieItem moviesdata={movieitem} />
              </Grid>
            ))}
          </Grid>
        )}
      </Container>
      <div className={showButtonline ? "line" : " "}></div>
    </div>
  );
};

export default SectionMovie;
