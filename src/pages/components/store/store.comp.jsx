//import React from 'react';
import '/Danilo/smart-store/src/pages/components/store/store.style.css'
import ProductsPage from '../products/productsRow.comp';
import React, { Component } from 'react';


const StorePage = (props) => {
  return (
    <div className="storepage">
      <h1>Products</h1>
      <ProductsPage/>
    </div>
  );
}


export default StorePage;