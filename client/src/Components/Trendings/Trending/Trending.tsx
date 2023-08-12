import "./trending.scss";
const gambar = require("../../../Assets/Trending/Trending 1.png");

export default function Trending({movie}: {movie:any}) {
  return (
    <div className="Cardtrending">
      <div className="cardImage">
        <div className="image-container">
          <img src={require(`../../../Assets/${movie.imageUrl}`)} alt="trending" />
          <div className="overlay"></div>
        </div>
      </div>

      <div className="info">
        <h3 className="text-xl font-medium text-[#d9d9d9] hover:text-[#DB0000]">
          {movie.movie_title}
        </h3>
        <p className="text-[#B7B7B7] font-normal text-base">{movie.year}</p>
      </div>
    </div>
  );
}
