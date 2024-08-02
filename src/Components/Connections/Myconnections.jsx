import React, { useState, useEffect } from "react";
import Carousel from "../../Assets/carousel.png";
import "./styles.css";

export default function Myconnections({
  markedComplete,
  onViewConnectionIndexToggle = () => {},
  onViewCardIndexToggle = () => {},
}) {
  const [viewConnectionIndex, setViewConnectionIndex] = useState(null);
  const [viewCardIndex, setViewCardIndex] = useState(null);

  const handleViewConnection = (index) => {
    const newViewConnectionIndex = viewConnectionIndex === index ? null : index;
    setViewConnectionIndex(newViewConnectionIndex);
    onViewConnectionIndexToggle(newViewConnectionIndex);
  };

  const handleViewCard = (index) => {
    const newViewCardIndex = viewCardIndex === index ? null : index;
    setViewCardIndex(newViewCardIndex);
    onViewCardIndexToggle(newViewCardIndex);
  };

  useEffect(() => {
    if (markedComplete) {
      setViewConnectionIndex(null);
      setViewCardIndex(null);
    }
  }, [markedComplete]);

  const isEditingOrViewing = 
    markedComplete || viewConnectionIndex !== null || viewCardIndex !== null;

  return (
    <div
      className={`myconnections ${isEditingOrViewing ? "editing" : ""}`}
      // style={{ width: isEditingOrViewing ? '270px' : '733px' }}
    >
      {Array(5)
        .fill(null)
        .map((_, index) => (
          <div
            className={`person ${
              viewCardIndex === index || viewConnectionIndex === index ? "editing-border" : ""
            }`}
            onClick={() => handleViewCard(index)}
            key={index}
          >
            <div className="profile"></div>
            <div className="username">
              <h5>NAME</h5>
              <p>Senior UI Designer</p>
              <p
                style={{ color: "blue", cursor: "pointer", marginTop: "3px" }}
                onClick={(e) => {
                  e.stopPropagation(); // Prevents triggering the parent onClick event
                  handleViewConnection(index);
                }}
              >
                View connections{" "}
                <img className="carousel" src={Carousel} alt="carousel" />
              </p>
            </div>
            {(viewConnectionIndex === index || viewCardIndex === index) && (
              <div className="addprofiles">
                <i className="fa-solid fa-square-plus"></i>
              </div>
            )}
            {!markedComplete && !isEditingOrViewing && (
              <>
                <hr />
                <div className="job">
                  <p>
                    Design @BYJU'S (Hiring Product, UI, Motion Designers)
                  </p>
                </div>
                <div className="contact">
                  <p>
                    <i className="fa-solid fa-phone"></i> +91 1234567890
                  </p>
                  <p>
                    <i className="fa-solid fa-envelope"></i> abc@gmail.com
                  </p>
                </div>
              </>
            )}
          </div>
        ))}
    </div>
  );
}
