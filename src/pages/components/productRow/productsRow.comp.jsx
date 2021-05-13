import './productsRow.style.css';
import ProductsTable from '../products/productsTable.comp';
import React, { Component, useState } from 'react';
import ProductsPage from '../productsPage/products.comp';

const RowTable =(props) => {
  return (
    <div className="productRow-container">
      
      {props.product.name}
      <span> </span>
      {props.product.City}
      <span> </span>
      {'$'}{props.product.Price}
    
    </div>
  );
}

export default RowTable;