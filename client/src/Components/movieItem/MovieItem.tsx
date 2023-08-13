import React from "react";
import "./movieItem.scss";

const truncateTitle = (title: string, maxLength: number = 20): string => {
  if (title.length <= maxLength) {
    return title;
  } else {
    return title.substring(0, maxLength) + "...";
  }
};

export default function MovieItem({moviesdata}:{moviesdata:any}){
  return (
    <div className="box-item">
      <div className="poster">
        <div className="overplap-poster">
          <img
            src={require(`../../Assets/${moviesdata.imageUrl}`)} alt={moviesdata.movie_title}
          />
          <div className="badge">
            <div className="overplap-badge">
              <span className="text-wrap">
                {moviesdata.isSeries === 0 ? <p>Movies</p> : <p>Series</p>}
                </span>
            </div>
          </div>
        </div>
        <div className="title-poster">
          <h3>
            {truncateTitle(moviesdata.movie_title, 38)}
          </h3>
          <p>{moviesdata.year}</p>
        </div>
      </div>
    </div>
  );
}
