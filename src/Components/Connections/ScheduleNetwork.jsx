import React, { useState } from "react";
import "./styles.css";

const ScheduleNetwork = ({ onViewToggle }) => {
  const [viewPerson, setViewPerson] = useState(false);

  const handleViewPerson = () => {
    const newViewPerson = !viewPerson;
    setViewPerson(newViewPerson);
    if (onViewToggle) {
      onViewToggle(newViewPerson, newViewPerson ? 5 : 0); // Pass 300px width if view person is true, otherwise 0
    }
  };

  return (
    <div>
      <div className="scheduled">
        <div className="top">
          <h4>Most Popular Networks</h4>
          <i
            className="fa-solid fa-circle-info"
            style={{ marginLeft: "50px" }}></i>
        </div>
        {[...Array(3)].map((_, index) => (
          <div className="myschedule" key={index}>
            <div className="profile"></div>
            <div className="details">
              <h5>NAME</h5>
              <p>Design @BYJU'S (Hiring Product, UI, Motion Designers)</p>
              <button onClick={handleViewPerson}>view person</button>
            </div>
          </div>
        ))}
        <p style={{ textAlign: "center", color: "#2867B2" }}>
          See more
          <i
            className="fa-solid fa-arrow-right-long"
            style={{ marginLeft: "7px" }}></i>
        </p>
      </div>
    </div>
  );
};

export default ScheduleNetwork;
