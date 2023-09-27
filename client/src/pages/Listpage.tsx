import React, {useState} from 'react'
import Navbar from "../Components/navbar/Navbar";
import Footer from "../Components/footer/Footer";
import SectionMovie from "../Components/SectionMovie/SectionMovie";
import CustomPagination from "../Components/paginations/CustomPaginations";
import moviesDataFilm from "../datadummy/film/film.json";
import moviesDataSeries from "../datadummy/series/series.json";
import movieDataAnime from "../datadummy/seriesanime/seriesAnime.json";
import movieDataDrakor from "../datadummy/seriesdrakor/seriesDrakor.json";

export default function Listpage() {
    const [page, setPage] = useState<number>(1);

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

  return (
    <div className="ListPage">
      <Navbar />
      <br />
      <SectionMovie
        title="Series"
        isCarousel={false}
        moviesdata={moviesData}
        showButtonline={true}
        seeMore={false}
      />
      <CustomPagination setPage={setPage}/>
      <Footer />
    </div>
  );
}
