// import React from "react";
// import Carousel from "../../Assets/carousel.png";
// import "./styles.css";

// const Networks = ({ width, isnewview, viewperson, widthafter }) => {
//   const style = {
//     width: width ? `${width}px` : "auto", // Apply the width if provided
//   };

//   return (
//     <div className="networks" style={style}>
//       {Array(5)
//         .fill(null)
//         .map((_, index) => (
//           <div className={`person`} key={index}>
//             <div className="profile"></div>
//             <div className="username">
//               <h5>NAME</h5>
//               <p>Senior Web Developer</p>
//               <p
//                 style={{ color: "blue", cursor: "pointer", marginTop: "3px" }}
//                 onClick={() => {
//                   // handlemarkedComplete(index);
//                 }}>
//                 {/* {markedCompleteIndex === index ? 'Edit profile' : 'View connections'} */}
//                 View connections
//                 <img
//                   className="carousel"
//                   style={{ marginLeft: "4px" }}
//                   src={Carousel}
//                   alt="carousel"
//                 />
//               </p>
//             </div>
//             {/* {viewperson && isnewview && (
//           <div className='addprofiles'>
//             <i className="fa-solid fa-square-plus"></i>
//           </div>
//           )} */}
//             {!viewperson && isnewview && (
//               <>
//                 <hr />
//                 <div className="job">
//                   <p>
//                     Design @BYJU'S (Hiring Product, UI, Motion Designers) Design
//                     @BYJU'S (Hiring Product, UI, Motion Designers)
//                   </p>
//                 </div>
//                 <div className="contact">
//                   <p>
//                     <i className="fa-solid fa-phone"></i> +91 1234567890
//                   </p>
//                   <p>
//                     <i className="fa-solid fa-envelope"></i> abc@gmail.com
//                   </p>
//                 </div>
//               </>
//             )}
//           </div>
//         ))}
//     </div>
//   );
// };

// export default Networks;


import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Carousel from '../../Assets/carousel.png';
import './styles.css';

export default function Networks({ markedComplete}) {
  const location = useLocation();
  const { email } = location.state || {};
  const [connections, setConnections] = useState([]);
  const [markedCompleteIndex, setmarkedCompleteIndex] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log('Attempting to fetch data...');
        const response = await fetch('http://localhost:8000/api/networks', {
          method: 'GET',
        });
        if (!response.ok) {
          throw new Error(`Failed to fetch data: ${response.statusText}`);
        }
        const data = await response.json();
        console.log('Fetched data:', data);  // Log fetched data to verify structure
        setConnections(data.users); // Set connections state with the array of users
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleMarkedComplete = (person_id) => {
    const newmarkedComplete = markedCompleteIndex === person_id ? null : person_id;
    setmarkedCompleteIndex(newmarkedComplete);
  };

  return (
    <div className="myconnections">
      {Array.isArray(connections) && connections.map((connection) => (
        <div className="person" key={connection.person_id}>
          <div className="profile">
            <img src={`http://localhost:8000${connection.profile}`} alt="Userprofile" />
          </div>
          <div className="username">
            <h5>{connection.fullname}</h5>
            {/* <p>{connection.profile}</p> */}
            <p
              style={{ color: "blue", cursor: "pointer", marginTop: "3px" }}
              onClick={() => {
                handleMarkedComplete(connection.person_id);
              }}
            >
              {markedComplete ? 'Edit profile' : 'View connections'}
              {markedComplete ? <i className="fa-solid fa-pen-to-square"></i> : <img className='carousel' src={Carousel} alt="carousel" />}
            </p>
          </div>
          {markedComplete && (
            <div className='addprofiles'>
              <i className="fa-solid fa-square-plus"></i>
            </div>
          )}
          {!markedComplete && (
            <>
              <hr />
              <div className="job">
                <p>{connection.shortdescription}</p>
              </div>
              <div className="contact">
                <p><i className="fa-solid fa-phone"></i> {connection.phonenumber}</p>
                <p><i className="fa-solid fa-envelope"></i> {connection.email}</p>
              </div>
            </>
          )}
        </div>
      ))}
    </div>
  );
}

