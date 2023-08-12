import MovieItem from "../movieItem/MovieItem";
import { Container } from "@mui/material";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import "./SectionMovie.scss";

export default function SectionMovie() {
  const responsive = {
    0: { items: 1 },
    568: { items: 3 },
    1024: { items: 5 },
  };

  return (
    <div>
      <Container maxWidth="xl">
        <div className="title-section">
          <h2 className="text-white mt-14 mb-10">Film</h2>
        </div>
        <AliceCarousel 
            mouseTracking 
            responsive={responsive}
            disableDotsControls
            // autoPlay={true}
            // autoPlayInterval={5000}
            // infinite>
            >
          <MovieItem />
          <MovieItem />
          <MovieItem />
          <MovieItem />
          <MovieItem />
          <MovieItem />
        </AliceCarousel>
      </Container>
    </div>
  );
}
