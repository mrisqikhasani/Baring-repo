import Navbar from "../Components/navbar/Navbar";
import Footer from "../Components/footer/Footer";
import Trendings from "../Components/Trendings/Trendings";
import SectionMovie from "../Components/SectionMovie/SectionMovie";
import moviesDataFilm from "../datadummy/film/film.json";
import moviesDataSeries from "../datadummy/series/series.json";
import movieDataAnime from "../datadummy/seriesanime/seriesAnime.json";
import movieDataDrakor from "../datadummy/seriesdrakor/seriesDrakor.json";

export default function Homepage() {
  return (
    <div className="Homepage">
      <Navbar />
      <Trendings />
      <SectionMovie
        title="Film"
        isCarousel={true}
        showButtonline={true}
        moviesdata={moviesDataFilm}
        seeMore={true}
        />
      <SectionMovie
        title="Series"
        isCarousel={true}
        showButtonline={true}
        moviesdata={moviesDataSeries}
        seeMore={true}
        />
      <SectionMovie
        title="Anime"
        isCarousel={true}
        showButtonline={true}
        moviesdata={movieDataAnime}
        seeMore={true}
        />
      <SectionMovie
        title="Drakor"
        isCarousel={true}
        showButtonline={true}
        moviesdata={movieDataDrakor}
        seeMore={true}
      />
      <Footer />
    </div>
  );
}
