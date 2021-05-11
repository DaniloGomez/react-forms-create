import React from 'react';
import StorePage from './components/store/store.comp';

function First() {
  
  let productsList = [
      {
        name: "Egg",
        City: "Manizales",
        Price: 350,
      },
      {
        name: "Rice",
        City: "Pereira",
        Price: 2300,
      },
      {
        name: "Cookies",
        City: "Bogotá",
        Price: 600,
      },
      {
        name: "Cake",
        City: "Manizales",
        Price: 8500,
      },
    ]
  
  
  return (
    <div className="first">
      <StorePage productsList={productsList} />
    </div>
  );
}


export default First;