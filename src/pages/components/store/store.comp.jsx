import React, { useState }  from 'react';
import '../store/store.style.css';
import ProductsPage from '../products/productsTable.comp';


const StorePage = (props) => {
  
  const [category, setCategory] = useState('c1');
  const [name, setName] = useState('');
  const [city, setCity] = useState('');
  const [price, setPrice] = useState(0);

  const addProduct = (event)=>{
    event.preventDefault();
    
    const newProduct={
      id:name,
      name: name,
      City: city,
      Price: Number(price),
    };

    props.onAddProduct(newProduct, category);

    /*console.log('category ' + category);
    console.log('name ' + name);
    console.log('city ' + city);
    console.log('price ' + price);*/
  }

  return (
    <div className="storepage">
      <div>
        <h1>Shoes Store</h1>
        <ProductsPage
          productsList={props.productsList}
          onAddProduct={props.onAddProduct}
        />
      </div>
      <div className="table-form">
        <form>
          <table>
            <tbody>
              <tr>
                <td>
                  Select Store
                </td>
              </tr>
              <tr>
              <td>
                  <select
                  value={category} 
                  onChange={(event)=>{
                    console.log(event.target.value);
                    setCategory(event.target.value);
                  }}
                  >
                    <option value="c1">Almacen L</option>
                    <option value="c2">Tienda DC</option>
                  </select>
                </td>
              </tr>

              <tr>Name</tr>
              <tr>
                <input type="text" name="" id="" value={name} 
                  onChange={(event)=>{
                    console.log(event.target.value);
                    setName(event.target.value);
                  }}
                />
              </tr>

              <tr>City</tr>
              <tr>
                <input type="text" name="" id="" 
                value={city} 
                onChange={(event)=>{
                  console.log(event.target.value);
                  setCity(event.target.value);
                }}
                />
              </tr>

              <tr>Price</tr>
              <tr>
                <input type="number" 
                value={price} 
                onChange={(event)=>{
                  
                  console.log(event.target.value);
                  setPrice(event.target.value);
                }}
                />
              </tr>
              <tr>
                <button
                  onClick={addProduct}
                >
                  Create
                </button>
              </tr>
            </tbody>
            
            
          </table>
        </form>
      </div>
      
    </div>
    
  );
}

export default StorePage;