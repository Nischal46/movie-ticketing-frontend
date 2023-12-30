import React from "react";
import cinema_hall_pic from "./../../../photos/hall.jpg";

function Ticket() {
  return (
    <div className="ticket-page">
      <div className="image-wrapper">
        <img src={cinema_hall_pic} alt="cinemall_hall picture" />
      </div>

      <div className="table-wrapper">
        <table
          style={{
            color: "#fff",
            borderCollapse: "collapse",
            margin: "0",
          }}
        >
          <thead>
            <tr>
              <th>Ticket Categories</th>
              <th>CUBE 1</th>
              <th>CUBE 2</th>
              <th>CUBE 3</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>Morning Shows (Sunday to Saturday, 6 AM - 9 AM)</td>
              <td>350.00</td>
              <td>300.00</td>
              <td>325.00</td>
            </tr>

            <tr>
              <td>Weekday Shows (Monday & Thursday)</td>
              <td>350.00</td>
              <td>470.00</td>
              <td>500.00</td>
            </tr>

            <tr>
              <td>Weekend Shows (Friday to sunday)</td>
              <td>400.00</td>
              <td>500.00</td>
              <td>550.00</td>
            </tr>
          </tbody>
        </table>

        <ul>
          <li>For 3D Movies, extra Rs 50 is charged in all cubes</li>
          <li>For VIP Section, extra Rs 100 is charged</li>
        </ul>
      </div>
    </div>
  );
}

export default Ticket;
