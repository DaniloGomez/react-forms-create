import React, { useState } from 'react';
import SecondStorePage from './components/computer-store/store.comp';

function Second() {
  
  let productsList = 
      [
          {
            id:"c1",
            name:'Almacen Lola',
            products:[
              {
                id:"p1",
                name:"River-Island",
                gender:"Male",
                Price:350,
              },
              {
                id:"p2",
                name:"Adidas-Haiwee",
                gender:"Male",
                Price:2300,
              },
              {
                id:"p4",
                name:"NMD-R1",
                gender:"Female",
                Price:8500,
              },
            ]
          },
          {
            id:"c2",
            name:'Rute',
            products:[
              {
                id:"p3",
                name: "DC-Trase",
                gender: "Female",
                Price: 600,
              },
            ]
          }
     
    ];
    
  const [products, setProducts] = useState(productsList);
    //Debo tener en cuenta 2 reglas:
    //1. No puedo modificar la variable que ya tengo "products", si la modifico, no se refresca
    //2. Tengo que hacer una nueva variable, y debo asignarla al set de la variable
  
    return (
    <div className="first">
      <SecondStorePage productsList={products}
        onAddProduct={(productObj, categoryId)=>{
          //1. Crear arreglo nuevo de products
          const newProducts = [];
          for(let i=0; i<products.length; i++){
            if(products[i].id !== categoryId){
              newProducts.push(products[i]);
            }
            else{
              newProducts.push({...products[i],
              products:[...products[i].products, productObj]});
            }
          }

          //2. Cambiar el arreglo de "products a través de la funcion setProducts"
          setProducts(newProducts);
          console.log({newProducts});
          //console.log(productObj);
        }}
      />
    </div>
  );
}


export default Second;