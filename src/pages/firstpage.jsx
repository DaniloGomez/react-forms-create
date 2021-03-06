import React, { useState } from 'react';
import StorePage from './components/store/store.comp';

function First() {
  
  let productsList = 
      [
          {
            id:"c1",
            name:'Almacen L',
            products:[
              {
                id:"p1",
                name:"Nike-Air",
                City:"Manizales",
                Price:350,
              },
              {
                id:"p2",
                name:"Adidas-Haiwee",
                City:"Pereira",
                Price:2300,
              },
              {
                id:"p4",
                name:"NMD-R1",
                City:"Manizales",
                Price:8500,
              },
            ]
          },
          {
            id:"c2",
            name:'Tienda DC',
            products:[
              {
                id:"p3",
                name: "DC-Trase",
                City: "Bogotá",
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
    <div className="second">
      <StorePage productsList={products}
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


export default First;