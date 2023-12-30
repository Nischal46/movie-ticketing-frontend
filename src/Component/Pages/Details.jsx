import React from "react";

function Details() {
  // const data = {
  //   name: "Movie Database 1",
  //   genre: "Romantic",
  //   releaseDate: "2072-02-12",
  //   duration: "172",
  // };

  return (
    <div className="details-page">
      <div className="movies-details-description">
        <img src="https://d346azgjfhsciq.cloudfront.net/S3/uploads/gallery/1702912176757-2400x900x.jpg" />

        <div className="details-other-detail">
          <p>
            <span>Releasing Date: </span>Dec 01, 2023
          </p>

          <p>
            <span>Date: </span>
          </p>

          <p>
            <span>Duration: </span> 2 hrs 40 min
          </p>

          <p>
            <span>Director: </span> Rajkumar Hirani
          </p>

          <p>
            <span>Genre: </span>Action
          </p>

          <p>
            <span>Cast: </span> Prabhas, Anushka
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
