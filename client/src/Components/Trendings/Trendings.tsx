import Trending from "./Trending/Trending";
import moviesData from "../../datadummy/trendings/trending.json"
import { Container } from "@mui/material";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import "./trendings.scss";

function Trendings() {
  const responsive = {
    0: { items: 1 },
    768: { items: 2 },
    1024: { items: 3 },
  };

  return (
    <>
      <div className="Trendings">
        <Container maxWidth='xl'>
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
          {moviesData.map(movie => (
            <Trending movie={movie}/>
          ))}
          </AliceCarousel>
        </Container>
        <div className="line"></div>
      </div>
    </>
  );
}

export default Trendings;
