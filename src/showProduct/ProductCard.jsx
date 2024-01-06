import React from "react";

const ProductCard = ({ imgSrc, title, price,type ,quantity}) => {
  
  return (
    <div className="col-md-4" style ={{marginBottom:"20px"}}>
      <div className="card">
        <img src={imgSrc} className="card-img-top" alt={title} />
        <div className="card-body">
        <h5 className="card-title"> Type : {type}</h5>
          <h5 className="card-title">Title : {title}</h5>
          <p className="card-text">Price : ${price}</p>
          <p className="card-text">Quantity : {quantity}</p>


        </div>
      </div>
    </div>
  );
};

export default ProductCard;
