import "./trending.scss";
import { img_landscape } from '../../../config/config'

interface Movie {
  id: number;
  title: string;
  backdrop_path: string;
  release_date: string;
}

interface TrendingProps {
  movie: Movie;
}
export default function Trending({ movie }: TrendingProps) {
  const dateString = movie.release_date;
  const year = new Date(dateString).getFullYear();
  return (
    <div className="Cardtrending">
      <div className="cardImage">
        <div className="image-container">
          <img
            src={`${img_landscape}${movie.backdrop_path}`}
            alt="trending"
          />
          <div className="overlay"></div>
        </div>
      </div>

      <div className="info">
        <h3 className="text-xl font-medium text-[#d9d9d9] hover:text-[#DB0000]">
          {movie.title}
        </h3>
        <p className="text-[#B7B7B7] font-normal text-base">{year}</p>
      </div>
    </div>
  );
}
