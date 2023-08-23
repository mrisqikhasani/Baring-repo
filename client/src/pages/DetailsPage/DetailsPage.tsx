import { useParams } from "react-router-dom";
import Navbar from "../../Components/navbar/Navbar";
import Footer from "../../Components/footer/Footer";
import SectionMovie from "../../Components/SectionMovie/SectionMovie";
import HeroDetail from "../../Components/heroDetails/HeroDetail";
import CastDetails from "../../Components/castDetails/CastDetails";
import MediaDetails from "../../Components/mediaDetails/MediaDetails";
import movieDataDrakor from "../../datadummy/seriesdrakor/seriesDrakor.json";
import moviesDataFilm from "../../datadummy/film/film.json";
import moviesDataSeries from "../../datadummy/series/series.json";
import movieDataAnime from "../../datadummy/seriesanime/seriesAnime.json";
import "./DetailsPage.scss";

export default function DetailsPage() {
  const { id } = useParams();

  const moviesData: MovieData[] = [
    ...moviesDataFilm,
    ...moviesDataSeries,
    ...movieDataAnime,
    ...movieDataDrakor,
  ];

  interface MovieData {
    id: number;
    movie_title: string;
    year: string;
    imageUrl: string;
    isSeries: number;
  }

  const selectedMovies = moviesData.find((movie) => movie.id === Number(id));
  if (!selectedMovies) {
    return <div>tidak ketemu</div>;
  }

  return (
    <div className="DetailsPage">
      <HeroDetail moviesdata={selectedMovies}/>
      <Navbar />
      <CastDetails moviesdata={selectedMovies}/>
      <MediaDetails moviesdata={selectedMovies}/>
      <SectionMovie
        title="More Like This"
        isCarousel={false}
        seeMore={false}
        moviesdata={movieDataDrakor}
        showButtonline={true}
      />
      <Footer />
    </div>
  );
}
