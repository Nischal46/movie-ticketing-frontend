import React from "react";
import { useState } from "react";
import { useGetAllMoviesQuery } from "../../utils/api";

function Movies() {

  const {data, error, isLoading} = useGetAllMoviesQuery();

  return (
    <div className="movies-page">
      <ul className="main-movies-option">
        <li>Now Showing</li>
        <li>Next Release</li>
      </ul>

      <div className="main-movies-section">
        <MovieCard />
        <MovieCard />
        <MovieCard />
      </div>

      <p>Coming Soon</p>
      <div className="main-coming-section">
        <div className="coming-movies-section">
          <ComingSoonMovieCard />
          <ComingSoonMovieCard />
          <ComingSoonMovieCard />
          <ComingSoonMovieCard />
          <ComingSoonMovieCard />
          <ComingSoonMovieCard />
          <ComingSoonMovieCard />
        </div>
        <div className="arrow-button">
          <button>
            <i className="fa-solid fa-arrow-left"></i>
          </button>
          <button>
            <i className="fa-solid fa-arrow-right"></i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Movies;

function MovieCard() {
  return (
    <div className="movie-card">
      <img src="https://cdn.kobo.com/book-images/39f5758d-be8e-4dfd-8395-52092dfb6f49/353/569/90/False/marvel-s-iron-man-3.jpg" />
      <span>Now Showing</span>
      {/* <div className="movie-card-body">
        <p>
          <i className="fa-solid fa-film"></i>
          <strong>Movie Name</strong>
        </p>
        <p>
          <i className="fa-solid fa-calendar-days"></i>
          <strong>Movie release date</strong>
        </p>
        <p>
          <i className="fa-regular fa-clock"></i> <strong>duration</strong>
        </p>
      </div> */}
    </div>
  );
}

function ComingSoonMovieCard() {
  return (
    <div className="coming-soon-movie-card">
      <img src="https://cdn.kobo.com/book-images/39f5758d-be8e-4dfd-8395-52092dfb6f49/353/569/90/False/marvel-s-iron-man-3.jpg" />
      <span>Coming Soon</span>
      {/* <div className="movie-card-body">
        <p>
          <i className="fa-solid fa-film"></i>
          <strong>Movie Name</strong>
        </p>
        <p>
          <i className="fa-solid fa-calendar-days"></i>
          <strong>Movie release date</strong>
        </p>
        <p>
          <i className="fa-regular fa-clock"></i> <strong>duration</strong>
        </p>
      </div> */}
    </div>
  );
}
