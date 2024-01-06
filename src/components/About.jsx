import React from "react";
import { useNavigate } from "react-router-dom";

export default function About() {
  const navigate = useNavigate(); 
  return (
    <div
    style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      marginTop: "20px",
    }}
    >
      <div
        className="card text-white bg-info mb-3"
        style={{
          maxWidth: "20rem",
        }}
      >
        <div className="card-body">
          <h4 className="card-title"> Chaabani Electronics </h4>
          <p className="card-text">
            Chaabani Electronics is your one-stop destination for wholesale
            electronics. From TVs to phones and laptops, we offer top-tier
            products at competitive prices. Our commitment to quality and
            customer satisfaction sets us apart. Join us at Chaabani Electronics
            for a seamless electronic wholesale experience.
          </p>
          <div style={{marginBottom:"20px"}}>
            <label>Are you a Seller?</label>
            <button className="btn btn-secondary" onClick={()=>{navigate("/input")}}>Sell</button>
          </div>
          <div>
            <label >Or a Buyer?</label>
            <button className="btn btn-secondary" onClick={()=>{navigate("/product")}}>Buy</button>
          </div>
        </div>
      </div>
    </div>
  );
}
