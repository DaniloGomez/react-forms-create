import './productsRow.style.css';
import ShoesTable from '../products/productsTable.comp';
import React, { Component, useState } from 'react';
import ShoesPage from '../productsPage/products.comp';

const SecondRowShoes =(props) => {
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
        props.product.gender != "" && props.product.gender === "Male"
        ?
        <span className="male"> {props.product.gender} </span>
        :
        props.product.gender === "Female"
        ?
        <span className="female">{props.product.gender}</span>
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

export default SecondRowShoes;