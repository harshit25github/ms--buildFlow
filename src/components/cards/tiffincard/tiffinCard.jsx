import React from "react";
import "./tiffinCard.css";

const TiffinCard = (props) => {
  return (
    <div style={{ textAlign: "center" }}>
      <div className="card">
        <div className="container">
          <h4>
            <b>{props.tiffinName}</b>
          </h4>
          <p>veg and Nonveg both</p>
        </div>
      </div>
    </div>
  );
};

export default TiffinCard;
