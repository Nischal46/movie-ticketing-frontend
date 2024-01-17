import React from "react";
import { useGetSingleMoviesQuery } from "../../utils/api";
import { useParams } from "react-router-dom";

function Details() {

  const {id} = useParams();

  console.log(id);


  const {data, isLoading, isError} = useGetSingleMoviesQuery(id);



  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error fetching movie details</div>;
  }

  if (!data) {
    return <div>Data not available</div>;
  }

  return (
    <div className="details-page">
      <div className="movies-details-description">
      <img src={data.data.imageCover} alt="movie pic" />

        <div className="details-other-detail">
          <p>
            <span>Releasing Date: </span>{data.data.release_date}
          </p>

          <p>
            <span>Date: </span>
          </p>

          <p>
            <span>Duration: </span> {data.data.duration} min
          </p>

          <p>
            <span>Director: </span> Rajkumar Hirani
          </p>

          <p>
            <span>Genre: </span>{data.data.genre}
          </p>

          <p>
            <span>Cast: </span> {data.data.movieCast}
          </p>
        </div> 
      </div> 
      <div className="movies-story">
        <h3>Fighter</h3>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque,
          incidunt? Ut architecto ab, excepturi tenetur molestiae quibusdam
          aspernatur voluptatum perspiciatis iusto unde, fugiat esse.
        </p>
      </div>
    </div>
  );
}

export default Details;
