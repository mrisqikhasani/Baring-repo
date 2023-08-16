import { useParams } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import Navbar from "../../Components/navbar/Navbar";
import Footer from "../../Components/footer/Footer";
import SectionMovie from "../../Components/SectionMovie/SectionMovie";
import movieDataDrakor from "../../datadummy/seriesdrakor/seriesDrakor.json";
import moviesDataFilm from "../../datadummy/film/film.json";
import moviesDataSeries from "../../datadummy/series/series.json";
import movieDataAnime from "../../datadummy/seriesanime/seriesAnime.json";

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
        <div className="imageBackgroud">
          <img
            src={require('../../Assets/Details/background.jpg')}
            alt="background"
          />
          <div className="overlay"></div>
        </div>
        <div className="content">
          <Navbar />
          <ul>
            <li>{selectedMovies.movie_title}</li>
          </ul>
          <SectionMovie
            title="More Like This"
            isCarousel={false}
            seeMore={false}
            moviesdata={movieDataDrakor}
            showButtonline={true}
          />
        </div>
        <Footer />
    </div>
  );
}
