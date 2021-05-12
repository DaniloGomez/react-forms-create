import React from 'react';
import StorePage from './components/store/store.comp';

function First() {
  
  let productsList = 
      [
          {
            id:"c1",
            name:'Eje Cafetero',
            products:[
              {
                id:"p1",
                name:"Egg",
                City:"Manizales",
                Price:350,
              },
              {
                id:"p2",
                name:"Rice",
                City:"Pereira",
                Price:2300,
              },
              {
                id:"p4",
                name:"Cake",
                City:"Manizales",
                Price:8500,
              },
            ]
          },
          {
            id:"c2",
            name:'Resto del país',
            products:[
              {
                id:"p3",
                name: "Cookies",
                City: "Bogotá",
                Price: 600,
              },
            ]
          }
     
    ];

  return (
    <div className="first">
      <StorePage productsList={productsList} />
    </div>
  );
}


export default First;