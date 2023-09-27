
import React, { useState, useEffect } from "react";
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

const moviesData: MovieData[] = [
  ...moviesDataFilm,
  ...moviesDataSeries,
  ...movieDataAnime,
  ...movieDataDrakor,
];

interface Cast {
  name: string;
  character: string;
  imageUrl: string;
}

interface ImageData {
  backdrop: string[];
  poster: string[];
}

interface MovieData {
  id: number;
  movie_title?: string;
  overview?: string;
  year?: string;
  date?: string;
  imageUrl?: string;
  isSeries?: number;
  country?: string;
  duration?: string;
  genre?: string[];
  cast?: Cast[];
  image?: ImageData;
}

export default function DetailsPage() {
  const { id } = useParams();
  const [selectedMovies, setSelectedMovies] = useState<MovieData | undefined>(
    undefined
  );

  useEffect(() => {
    window.scroll(0,0)
    const findMovie = moviesData.find((movie) => movie.id === Number(id));

    if (findMovie) {
      setSelectedMovies(findMovie);
    }
  }, [id]);


  return (
    <div className="DetailsPage">
      {selectedMovies ? (
        <div className="">
          <HeroDetail moviesdata={selectedMovies} />
          <Navbar />
          <CastDetails moviesdata={selectedMovies} key={id}/>
          <MediaDetails moviesdata={selectedMovies} />
          <SectionMovie
            title="More Like This"
            isCarousel={false}
            seeMore={false}
            moviesdata={movieDataDrakor}
            showButtonline={true}
          />
          <Footer key={3}/>
        </div>
      ) : (
        <div>Tidak ditemukan</div>
      )}
    </div>
  );
}
