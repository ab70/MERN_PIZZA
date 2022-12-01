import React from "react";
import { useState } from "react";
import "./ProductCard.css";

const options = [
  {
    id: "1",
    price: 450,
  },
  {
    id: "2",
    price: 430,
  },
  {
    id: "3",
    price: 440,
  },
  {
    id: "4",
    price: 4580,
  },
 
];

export default function ProductCard() {
  const handleChange = (e)=>{
    initprice(e.target.value)
  }
  const [price,initprice] = useState(options[0].price)
  return (
    <>
      <div className="row ">
        
        <div className="col-md-3 mt-2">
          <div class=" card cardproduct">
            <img
              className="card-img-top"
              src="https://images.unsplash.com/photo-1628840042765-356cda07504e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTh8fHxlbnwwfHx8fA%3D%3D&w=1000&q=80"
              alt="Avatar"
              style={{ width: "100%" }}
            />
            <div className="card-body">
              <h4 className="card-title text-center">Margerita pizza</h4>
              <div style={{display: "flex", justifyContent: "space-around"}}>
              
               
              <select className="form-select size-choose" aria-label="Size choose" onChange={handleChange}>
                {options.map((optionVal)=>(
                  <option key={optionVal.id} value={optionVal.price}>{optionVal.price}</option>
                ))}
                
              </select>
              <b className="card-text">$ {price}</b>
              </div>
              <a href="http://" className="btn cardbtn mt-2 shadow-sw rounded-pill ">
                Add to card
              </a>
            </div>
          </div>
        </div>
       
      </div>
    </>
  );
}
