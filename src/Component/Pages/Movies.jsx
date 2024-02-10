import React, {useContext} from "react";
import { useNavigate } from "react-router-dom";
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
        {
          data ? data.data.map((cl, i) => <MovieCard key={cl._id} data={cl} index={i+1}  />) : <h4 style={{color: 'white'}}>No data to display in now showing section</h4>
        }
        
      </div>

      <p>Coming Soon</p>
      <div className="main-coming-section">
        <div className="coming-movies-section">

        {
          data ? data.data.map(cl => <ComingSoonMovieCard key={cl._id} data={cl}  />) : <h4 style={{color: 'white'}}>No data to display in coming section</h4>
        }
        

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

function MovieCard({data, index}) {
  const redirect = useNavigate();
  return (
    <div className="movie-card" onClick={() => redirect(`/details/${index}/${data._id}`)}>
      <img src={data.imageCover} />
      <span>Now Showing</span>
    </div>
  );
}

function ComingSoonMovieCard({data}) {
  return (
    <div className="coming-soon-movie-card">
      <img src={data.imageCover} />
      <span>Coming Soon</span>
    </div>
  );
}
