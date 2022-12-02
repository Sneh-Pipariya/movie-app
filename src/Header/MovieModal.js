import React from "react";
import "./MovieModal.css";

const MovieModal = (props) => {
  return (
    // <div className="page">
    <div className="layout">
      <main className="image">
        <img src={props.poster_path} alt="poster" />
      </main>
      <article className="info">
        <h2>Moviee: {props.title}</h2>
        <h5>Language: {props.original_language}</h5>
        <h5>Release Date: {props.release_date}</h5>
        <p>
          <span className="movie-modal-overview">Overview: </span>
          {props.overview}
        </p>
      </article>
      {/* </div> */}
    </div>
    // </div>
  );
};

export default MovieModal;
