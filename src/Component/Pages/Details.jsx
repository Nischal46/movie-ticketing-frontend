import React from "react";
import { useGetSingleMoviesQuery } from "../../utils/api";
import { useParams } from "react-router-dom";
import UserContext from "../../context/UserContext";
import { useContext } from "react";


function Details() {

  const {cubeid, id} = useParams();
  console.log(cubeid)

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

        <Booking cubeid={+cubeid} moviedata={data.data} />
      </div>
    </div>
   

  );
}

function Booking({cubeid, moviedata}){
  console.log('cube id is', cubeid);
  console.log(typeof cubeid);
  let cube;

  if(cubeid === cubeid){
    cube = {
      cube: `CUBE ${cubeid}`
    }
  };

  console.log(cube);
  return (
    <div>
      <h3>Show Available At:</h3>

      {cubeid === 1 && <Button cube='CUBE 1' /> }
      {cubeid === 2 && <Button cube='CUBE 2' /> }
      {cubeid === 3 && <Button cube ='CUBE 3' /> }

    <Timing cubedetails={cube} moviedata={moviedata} />
      
    </div>
  )
}

function Button({cube}){
  return (
    <button className="action_btn">{cube}</button>
  )
}

function Timing(){
  const { setUserData } = useContext(UserContext);

  let timing = [
    '6 : 00 to 8 : 00 AM',
    '10 : 00 to 12 : 00 PM',
    '2 : 00 to 4 : 00 PM',
    '6 : 00 to 8 : 00 PM'
  ];

  let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
  let TicketDate = [];

  for(let i = 0; i < 3; i++){
    TicketDate.push(`${months[new Date().getMonth()]} ${new Date().getDate() + i} ${new Date().getFullYear()}`)
  }
  console.log(TicketDate);

  return  (
    <div>
       <h4 style={{margin: '1rem 0'}}>Timing: </h4>
      <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', flexDirection: 'column'}}>
        {timing.map((cl, i) => <li key={i} className="timing">{cl}</li>)}
      </div>

      <div style={{display: 'flex', justifyContent: 'space-between'}}>
        {TicketDate.map(cl => <li className="date">{cl}</li>)}
      </div>
    </div>
  )
}

export default Details;
