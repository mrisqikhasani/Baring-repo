import Navbar from "./Components/navbar/Navbar";
import Footer from "./Components/footer/Footer";
import Trending from "./Components/Trendings/Trendings";
import SectionMovie from "./Components/SectionMovie/SectionMovie";
import moviesDataFilm from "./datadummy/film/film.json";
import moviesDataSeries from "./datadummy/series/series.json";
import movieDataAnime from "./datadummy/seriesanime/seriesAnime.json";
import movieDataDrakor from "./datadummy/seriesdrakor/seriesDrakor.json";
import "./App.scss";

function App() {
  return (
    <div className="App">
      {/* <Navbar /> */}
      <Trending />
      <SectionMovie
        title="Film"
        isCarousel={true}
        showButtonline={true}
        moviesdata={moviesDataFilm}
      />
      <SectionMovie
        title="Series"
        isCarousel={true}
        showButtonline={true}
        moviesdata={moviesDataSeries}
      />
      <SectionMovie
        title="Anime"
        isCarousel={true}
        showButtonline={true}
        moviesdata={movieDataAnime}
      />
      <SectionMovie
        title="Anime"
        isCarousel={true}
        showButtonline={true}
        moviesdata={movieDataDrakor}
      />
      <Footer />
    </div>
  );
}

export default App;
