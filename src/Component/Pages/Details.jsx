import React, { useEffect, useState } from "react";
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
  const [isOpen, setIsOpen] = useState(false);
  const [timingOpen, setTimingOpen] = useState(false);
  const [timing, setTiming] = useState([]);



  function CheckTodayDate(passdate){

    const getHour = new Date().getHours();
    const getDate = new Date().getDate();

    console.log(passdate, getDate, getHour);

    if(getDate === passdate && getHour >= 6 && getHour < 10){
      return setTiming([ '10 : 00 to 12 : 00 PM',
      '2 : 00 to 4 : 00 PM',
      '6 : 00 to 8 : 00 PM'])
    }
    
    else if(getDate === passdate && getHour >= 10 && getHour < 16){
      return setTiming([ '2 : 00 to 4 : 00 PM',
      '6 : 00 to 8 : 00 PM'])
    }
    
    else if(getDate === passdate && getHour >= 16 && getHour < 20){
      console.log('trur trur');
      return setTiming(['6 : 00 to 8 : 00 PM'])
    }

    else if(getDate === passdate && getHour >= 20){
      return setTiming([]);
    }
    
    else {
      return setTiming([
        '6 : 00 to 8 : 00 AM',
        '10 : 00 to 12 : 00 PM',
        '2 : 00 to 4 : 00 PM',
        '6 : 00 to 8 : 00 PM'
      ]);
    } 
  }
  let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
  let TicketDate = [];

  for(let i = 0; i < 4; i++){
    TicketDate.push(`${months[new Date().getMonth()]} ${new Date().getDate() + i} ${new Date().getFullYear()}`)
  }
  console.log(TicketDate);

  const openModal = () => {
    setIsOpen(true)
  }

  const closeModal = () => {
    setIsOpen(false)
  }

  const openTimingModal = (cl) => {
    setTimingOpen(true);
    let today;
    today = cl.split(' ')[1];
    CheckTodayDate(+today)
  }

  return  (
    <div>
       <h4 style={{margin: '1rem 0'}}>Timing: </h4>

       <div style={{display: 'flex', justifyContent: 'space-between'}}>
        {TicketDate.map((cl, i) => <li key={i} className="date" onClick={() => openTimingModal(cl)}>{cl}</li>)}
      </div>
     { timingOpen === true && <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', flexDirection: 'column'}}>
        {timing.length > 0 ? timing.map((cl, i) => <li key={i} className="timing" onClick={openModal}>{cl}</li>) : <p>No more shows for today. All shows are booked.</p>}
      </div>
}
        <ModalOpen isOpen={isOpen} onClose={closeModal} />
    </div>
  )
}

function ModalOpen({isOpen, onClose}){
  const [selectedIndex, setSelectedIndex] = useState([]);
  const [fakesear, setfakeseat] = useState(['A2', 'G7'])

  if (!isOpen) {
    return null;
  }

  let seat = [];

  let a = 1, b = 1, c = 1, d = 1, e = 1, f = 1, g = 1, h = 1, x = 1, j = 1, k = 1, l = 1;

 for(let i = 1; i<=120; i++){

  if(i <= 10){
    seat[i] = `A${a}`;
    a++;
  }
  else if (i <= 20){
    seat[i] = `B${b}`;
    b++;
  }

  else if (i <= 30){
    seat[i] = `C${c}`;
    c++;
  }

  else if (i <= 40){
    seat[i] = `D${d}`;
    d++;
  }

  else if (i <= 50){
    seat[i] = `E${e}`;
    e++;
  }

  else if (i <= 60){
    seat[i] = `F${f}`;
    f++;
  }

  else if (i <= 70){
    seat[i] = `G${g}`;
    g++;
  }

  else if (i <= 80){
    seat[i] = `H${h}`;
    h++;
  }

  else if (i <= 90){
    seat[i] = `I${x}`;
    x++;
  }

  else if (i <= 100){
    seat[i] = `J${j}`;
    j++;
  }

  else if (i <= 110){
    seat[i] = `K${k}`;
  
  }

  else if (i <= 120){
    seat[i] = `L${l}`;
  
    l++;
  }
 }

 const handleClickSeat = (index) => {
  setSelectedIndex((pd) => {
    if(!pd.includes(index)){
      return [...pd, index]
    }
    else{
      const removedSeat = pd.filter(x => x !== index)
      console.log('Already insert');
      return removedSeat;
    }
  })
 }



 console.log(selectedIndex);

  return(
    <div className="modalOpen">
      <span onClick={onClose}>&times;</span>

      

      <div className="seatlayout">
        {seat.map((cl, i) => (<div key={i} className={`seat ${selectedIndex.includes(i) ? 'seatbooked' : 'seatavailable'} ${fakesear.includes(cl) ? 'seatalreadyreserved' : ''}`} onClick={() => {
        handleClickSeat(i)
        }}>
        {cl}
        </div>))}


      <div className="screen">Screen</div>
      </div>

      <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-around'}}>
      <div style={{color: 'red'}}><i className="fa fa-stop" aria-hidden="true" style={{fontSize: '36px'}}></i><p style={{color: 'white'}}>Reserved</p></div>
      <div style={{color: 'orange'}}><i className="fa fa-stop" aria-hidden="true" style={{fontSize: '36px'}}></i><p style={{color: 'white'}}>Booking</p></div>
      <div style={{color: 'green'}}><i className="fa fa-stop" aria-hidden="true" style={{fontSize: '36px'}}></i><p style={{color: 'white'}}>Available</p></div>
      </div>

      {selectedIndex.length > 0 ? <button className="action_btn payment_button">Proceed to payment</button> : ""}
    </div>
  )
}

export default Details;
