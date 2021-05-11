import React from 'react';
import '/Danilo/smart-store/src/pages/components/store/store.style.css'
import ProductsPage from '../products/productsRow.comp';


const StorePage = (props) => {
  return (
    <div className="storepage">
      <h1>Products</h1>
      <ProductsPage
        productsList={props.productsList}
        //onAddProduct={props.onAddProduct}
      />
    </div>
  );
}


export default StorePage;