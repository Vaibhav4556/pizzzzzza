import React, { useState } from "react";
import { useDispatch,useSelector } from "react-redux";
import { addTocart } from "../actions/cartActions";
export default function Pizza({ pizza }) {
  const [quantity, setQuantity] = useState(1);
  const [varient, setVarient] = useState("small");

  const [show ,setShow]=useState(false)
  const handleClose=()=>setShow(false)
  const handleShow =()=>setShow(true);

  const dispatch = useDispatch()
  function addtocart(){
    dispatch(addTocart(pizza,quantity,varient))
  }

  return (
    <div
  
      className="shadow-lg p-3 mb-5 bg-white rounded"
    >
      <h1> {pizza.name} </h1>
      <img
        src={pizza.image}
        className="img-fluid"
        style={{ height: "190px", width: "190px" }}
      />

      <div className="flex-container">
        <div className="w-100 m-1">
          <p>Varients</p>
          <select
            className="form-control"
            value={varient}
            onChange={(e) => setVarient(e.target.value)}
          >
            {pizza.varients.map((varient) => {
              return <option value={varient}>{varient}</option>;
            })}
          </select>
        </div>

        <div className="w-100 m-1">
          <p>Quantity</p>
          <select
            className="form-control"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          >
            {[...Array(10).keys()].map((y, i) => {
              return <option value={i + 1}>{i + 1}</option>;
            })}
          </select>
        </div>
      </div>

      <div className="flex-container">
        <div className="m-1 w-100">
          <h1 className="mt-2">
            Price:{pizza.prices[0][varient] * quantity}Rs/-
          </h1>
        </div>

        <div className="m-1 w-100">
          <button className="btn" onClick={addtocart}>Add to Cart</button>
        </div>
      </div>
    </div>
  );
}
