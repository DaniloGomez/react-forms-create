import './productsRow.style.css';
import React, { Component, useState } from 'react';

const RowShoes =(props) => {
  return (
    <div className="productRow-container">
      
      {
        props.product.name != ""
        ?
        <span>{props.product.name}</span>
        :
        <span><b>Error!</b></span>
      }
      <span> </span>
      {
        props.product.City != ""
        ?
        <span> {props.product.City} </span>
        :
        <span><b>Error!</b> </span>
      }
      <span> </span>
      {
        props.product.Price > 0
        ?
        <span>
          {'$'}{props.product.Price}
        </span>
        :
        <span>
          <b> Error!</b>
        </span>
      }
      
    
    </div>
  );
}

export default RowShoes;