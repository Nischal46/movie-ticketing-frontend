import React from "react";
import { useState } from "react";
import { redirect, useNavigate } from "react-router-dom";
import { useGetAllMoviesQuery } from "../../utils/api";

function Movies() {

  const {data, error, isLoading} = useGetAllMoviesQuery();
  console.log(data);

  return (
    <div className="movies-page">
      <ul className="main-movies-option">
        <li>Now Showing</li>
        <li>Next Release</li>
      </ul>

      <div className="main-movies-section">
        {
          data ? data.data.map(cl => <MovieCard key={cl._id} data={cl}  />) : <h4 style={{color: 'white'}}>No data to display in now showing section</h4>
        }
        
      </div>

      <p>Coming Soon</p>
      <div className="main-coming-section">
        <div className="coming-movies-section">
          <ComingSoonMovieCard />
          <ComingSoonMovieCard />
          {/* <ComingSoonMovieCard />
          <ComingSoonMovieCard />
          <ComingSoonMovieCard />
          <ComingSoonMovieCard />
          <ComingSoonMovieCard /> */}
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

function MovieCard({data}) {
  const redirect = useNavigate();
  return (
    <div className="movie-card" onClick={() => redirect(`/details/${data._id}`)}>
      <img src={data.imageCover} />
      <span>Now Showing</span>
    </div>
  );
}

function ComingSoonMovieCard() {
  return (
    <div className="coming-soon-movie-card">
      <img src="https://cdn.kobo.com/book-images/39f5758d-be8e-4dfd-8395-52092dfb6f49/353/569/90/False/marvel-s-iron-man-3.jpg" />
      <span>Coming Soon</span>
    </div>
  );
}
