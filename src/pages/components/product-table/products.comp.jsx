import '../products/products.style.css';
import React, { Component } from 'react';
import ProductsTable from '../products/productsRow.comp';


const ProductsPage =() => {
  return (
    <div>
      <ProductsTable/>
    </div>
  );
}


export default ProductsPage;