import React, { useEffect, useState } from "react";
import { useGetCheckSeatAvailabilityMutation, useGetSingleMoviesQuery, useBookSeatMutation, useGetUserQuery } from "../../utils/api";
import { useNavigate, useParams } from "react-router-dom";
import UserContext from "../../context/UserContext";
import { useContext } from "react";
import KhaltiCheckout from "khalti-checkout-web";
import khaltiPic from "./../../../photos/khalti.png"
import io from "socket.io-client"


function Details() {

  const {cubeid, id} = useParams();
  const {data, isLoading, isError} = useGetSingleMoviesQuery(id);
  const {setFilmDetails} = useContext(UserContext);

  useEffect(() => {
    if (data) {
        setFilmDetails(data);
    }
  }, [data, setFilmDetails]);

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
  let cube;

  if(cubeid === cubeid){
    cube = {
      cube: `CUBE ${cubeid}`
    }
  };

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
  const {setCube} = useContext(UserContext);

  function handleCube(cube){
    setCube(cube)
  }

  return (
    <button className="action_btn" onClick={() => handleCube(cube)}>{cube}</button>
  )
}




function Timing({cubedetails, moviedata}){
  const { setUserData } = useContext(UserContext);
  const [isOpen, setIsOpen] = useState(false);
  const [timingOpen, setTimingOpen] = useState(false);
  const [timing, setTiming] = useState([]);
  const {filmSchedule, setFilmSchedule} = useContext(UserContext);
  const {seatArray, setSeatArray} = useContext(UserContext);
  const [activeIndex, setActiveIndex] = useState(null);



  function CheckTodayDate(passdate){
  
    const getHour = new Date().getHours();
    const getDate = new Date().getDate();

    if(getDate === passdate && getHour >= 6 && getHour < 10){
      return setTiming([ '10:00 to 12:00 PM',
      '2:00 to 4:00 PM',
      '6:00 to 8:00 PM'])
    }
    
    else if(getDate === passdate && getHour >= 10 && getHour < 16){
      return setTiming([ '2:00 to 4:00 PM',
      '6:00 to 8:00 PM'])
    }
    
    else if(getDate === passdate && getHour >= 16 && getHour < 20){
      return setTiming(['6:00 to 8:00 PM'])
    }

    else if(getDate === passdate && getHour >= 20){
      return setTiming([]);
    }
    
    else {
      return setTiming([
        '6:00 to 8:00 AM',
        '10:00 to 12:00 PM',
        '2:00 to 4:00 PM',
        '6:00 to 8:00 PM'
      ]);
    } 
  }

  let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
  let TicketDate = [];
  let DisplayDate = [];

  const currentDate = new Date();
  const currentMonth = currentDate.getMonth();
  const currentYear = currentDate.getFullYear();



  for (let i = 0; i < 4; i++) {
    let newDay = currentDate.getDate() + i;
    let newMonth = currentMonth;
    let newYear = currentYear;

    if (newDay > new Date(newYear, newMonth + 1, 0).getDate()) {
      newDay = 0;
      newMonth += 1;
      if (newMonth > 11) {
        newMonth = 0;
        newYear += 1;
      }
    }

    TicketDate.push(`${months[newMonth]} ${newDay + i} ${newYear}`);
    DisplayDate.push(`${newYear}-${newMonth + 1}-${newDay + i}`)

  }

  const openModal = (time) => {

    setIsOpen(true);
    setFilmSchedule(prev => ({
      ...prev,
      time: time
    }))
  }

  const closeModal = () => {
    setIsOpen(false);
    setSeatArray([]);
  }

  const openTimingModal = (cl, date) => {
    setTimingOpen(true);
    let today;
    today = cl.split(' ')[1];
    CheckTodayDate(+today)
    setFilmSchedule(prev => ({
      ...prev,
      date: date
    }))
  }

  const handleClickIndex = (i) => {
    setActiveIndex(i)
  }

  return  (
    <div>
       <h4 style={{margin: '1rem 0'}}>Timing: </h4>

       <div style={{display: 'flex', justifyContent: 'space-between'}}>
        {TicketDate.map((cl, i) => <li key={i} className={`date ${activeIndex === i ? 'dateActive' : ''}`} onClick={() => {
          openTimingModal(cl, DisplayDate[i])
          handleClickIndex(i)
        }}>{cl}</li>)}
      </div>
     { timingOpen === true && <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', flexDirection: 'column'}}>
        {timing.length > 0 ? timing.map((cl, i) => <li key={i} className="timing" onClick={() => openModal(cl)}>{cl}</li>) : <p>No more shows for today. All shows are booked.</p>}
      </div>
}
        <ModalOpen isOpen={isOpen} onClose={closeModal} filmSchedule={filmSchedule} cube={cubedetails} moviedata={moviedata} />
    </div>
  )
}



let socket;

function connectionNo(conn){
   socket = io.connect(`http://localhost:8000/${conn}`);
  console.log(`http://localhost:8000/${conn}`);
}                                                                               

let seatarray = [];

function socketFunction(cl, userdetails, date, time, filmDetails){

  if(!seatarray.includes(cl)){
    seatarray.push(cl);
  }
  else{
    seatarray = seatarray.filter(x => x !== cl)
  }

  socket.emit('recordAction', { action: seatarray, user: userdetails, date, time, movie: filmDetails });
}


function ModalOpen({isOpen, onClose, filmSchedule, cube, moviedata}){
  const [getCheckSeatAvailability] = useGetCheckSeatAvailabilityMutation();
  const redirect = useNavigate();
  const [selectedIndex, setSelectedIndex] = useState([]);
  const [fakeseat, setfakeseat] = useState([]);
  const {userData, setUserData} = useContext(UserContext);
  const {filmDetails, setFilmDetails} = useContext(UserContext);
  const {seatArray, setSeatArray} = useContext(UserContext);
  const {data} = useGetUserQuery();
  const [bookSeat] = useBookSeatMutation();
  const [socketResponse, setSocketResponse] = useState([]);

  // optional

  if(cube.cube === 'CUBE 1'){
    connectionNo('connection1');

  }

  else if(cube.cube === 'CUBE 2'){
    connectionNo('connection2');

  }

  else{
    connectionNo('connection3');
  }
  
  useEffect(() => {
    async function handleCheckSeatStautus(){
      let seatdetails = {
        filmName: "" || filmDetails.data?._id,
        date: "" || filmSchedule.date,
        time: "" || filmSchedule.time   
      };
  
      if(isOpen){
        const response = await getCheckSeatAvailability(seatdetails);
        console.log(response);
      
      if (response && response.data && response.data.data) {
        const updatedFakeseat = response.data.data.map(item => item.seatNo);
        setfakeseat(updatedFakeseat);
      }

      
    }
    }

    handleCheckSeatStautus();
    
  }, [isOpen])

  useEffect(() => {

    let socketconn = io.connect(`http://localhost:8000/`);

    let actualfetchingMovie = {};

    if(data){
      setUserData([data.data][0]);
    }

    socketconn.on('alert', (responseJSON) => {

      console.log('response movie data is', responseJSON);

      if(moviedata?._id === responseJSON[0].movie){
        console.log('both movie id are same');
        actualfetchingMovie[responseJSON[0].user] = [];
        actualfetchingMovie[responseJSON[0].user].push(...responseJSON)
      }

      console.log('actual movie data fetching ', actualfetchingMovie);

      if(actualfetchingMovie.hasOwnProperty(userData._id)){
        console.log('Yes it consists');
        delete actualfetchingMovie[userData._id];
      }
      else{
        console.log("not consisted");
      }

      const finalseatarray = Object.values(actualfetchingMovie).reduce((acc, arr) => {
        return acc.concat(arr);
      }, [])

      setSocketResponse([...socketResponse, finalseatarray]);
    })
    return () => {
      socket.disconnect();
    }
  }, [setSocketResponse]);

  // const separatedData = socketResponse.reduce((acc, obj) => {
  //   const key = `${obj.movie}`;
  //   if (!acc[key]) {
  //     acc[key] = [];
  //   }
  //   acc[key].push(obj);
  //   return acc;
  // }, {});

  // console.log('from backend', separatedData);

  console.log('socket response is ', socketResponse);
  // console.log('the socket response from user id is ', socketResponse[1]);
  console.log(typeof socketResponse);

const final = socketResponse.map(obj => {
  return [].concat(...obj.map(cl => cl.action));
});
console.log('the final socket response is', final);

// Flatten the array of arrays into a single array
const uniqueOutput = [].concat(...final);

console.log(uniqueOutput);




 
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
    k++;
  
  }

  else if (i <= 120){
    seat[i] = `L${l}`;
  
    l++;
  }
 }

 let seatdetails = [];

 const handleClickSeat = (index, seatno) => {
  setSelectedIndex((pd) => {
    if(!pd.includes(index)){
      return [...pd, index]
    }
    else{
      const removedSeat = pd.filter(x => x !== index);
      return removedSeat;
    }
  })

  setSeatArray((prev) => {
    if(!prev.includes(seatno)){
      return [...prev, seatno]
    }
    else{
      const removedSeat = prev.filter(cl => cl !== seatno);
      return removedSeat;
    }
  })

 }






 let config = {
  "publicKey": `${import.meta.env.VITE_KHALTI_SECRET}`,
          "productIdentity": filmDetails.data._id,
          "productName": filmDetails.data.movieName,
          "productUrl": "http://gameofthrones.wikia.com/wiki/Dragons",
          "paymentPreference": [
              "KHALTI",
              "EBANKING",
              "MOBILE_BANKING",
              "CONNECT_IPS",
              "SCT",
              ],
          "eventHandler": {
              onSuccess (payload) {
                  console.log(payload);

                  async function KhaltiPayment(){
                    const bookingDetails = {
                      filim: payload.product_identity, 
                      price: filmDetails.data.price, 
                      seatNo: seatArray, 
                      bookingDate: filmSchedule.date, 
                      showTime: filmSchedule.time, 
                      amount: payload.amount,
                      token: payload.token, 
                      transactionId: payload.idx
                    }

                    const requestPayment = await bookSeat(bookingDetails);
                    if(requestPayment) redirect('/payment');

                  }

                if(payload){
                  KhaltiPayment();
                }
                
              },
              onError (error) {
                  console.log(error);
              },
              onClose () {
                  console.log('widget is closing');
              }
          }
}

  const checkout = new KhaltiCheckout(config);




  return(
    <div className="modalOpen">
      <span onClick={onClose}>&times;</span>

      <div className="seatlayout">
        {seat.map((cl, i) => (
        <div key={i} 
        className={`seat 
        ${selectedIndex.includes(i) ? 'seatbooked' : 'seatavailable'} 
        ${fakeseat?.includes(cl) ? 'seatalreadyreserved' : ''}
        ${uniqueOutput.includes(cl) ? 'seatalcurrentlyselected' : 'seatbooked'}
       `} 
        onClick={() => {
        handleClickSeat(i, cl)
        socketFunction(cl, userData._id, filmSchedule.date, filmSchedule.time, filmDetails.data._id)
        }}>
        {cl}
        </div>))}

      <div className="screen">Screen</div>
      </div>

      <div className="information-seat" style={{display: 'flex', alignItems: 'center', justifyContent: 'space-around'}}>
      <div style={{color: 'red'}}><i className="fa fa-stop" aria-hidden="true" style={{fontSize: '36px'}}></i><p style={{color: 'white'}}>Reserved</p></div>
      <div style={{color: 'orange'}}><i className="fa fa-stop" aria-hidden="true" style={{fontSize: '36px'}}></i><p style={{color: 'white'}}>Booking</p></div>
      <div style={{color: 'green'}}><i className="fa fa-stop" aria-hidden="true" style={{fontSize: '36px'}}></i><p style={{color: 'white'}}>Available</p></div>
      </div>

    {selectedIndex.length > 0 ? <button className="paymentbutton" onClick={() => checkout.show({amount: 10000})}>
        <img src={khaltiPic} /> Pay with Khalti</button> : ""}
    </div>
  )
}
// ${socketResponse.length > 0 ? socketResponse[0]?.includes(cl) ? socketResponse[1] === userData._id ? 'seatbooked' : 'seatalcurrentlyselected' : 'seatavailable' : 'seatavailable'}
export default Details;


