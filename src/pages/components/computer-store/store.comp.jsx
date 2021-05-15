import React, { useState }  from 'react';
import '../computer-store/store.style.css';
import SecondShoesTable from '../second-shoes-table/productsTable.comp';


const SecondStorePage = (props) => {
  
  const [category, setCategory] = useState('c1');
  const [name, setName] = useState('');
  const [gender, setGender] = useState('');
  const [price, setPrice] = useState(0);

  const addProduct = (event)=>{
    event.preventDefault();
    
    const newProduct={
      id:name,
      name: name,
      gender: gender,
      Price: Number(price),
    };

    props.onAddProduct(newProduct, category);

    /*console.log('category ' + category);
    console.log('name ' + name);
    console.log('city ' + city);
    console.log('price ' + price);*/
  }

  return (
    <div className="second-storepage">
      <div>
        <h1>Clothes Store</h1>
        <SecondShoesTable
          productsList={props.productsList}
          onAddProduct={props.onAddProduct}
        />
      </div>
      <div className="clothes-form">
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
                    <option value="c1">Almacen Lola</option>
                    <option value="c2">Rute</option>
                  </select>
                </td>
              </tr>

              <tr>Reference</tr>
              <tr>
                <input type="text" name="" id="" value={name}
                  onChange={(event)=>{
                    console.log(event.target.value);
                    setName(event.target.value);
                  }}
                />
              </tr>

              <tr>Gender</tr>
              <tr>
                <input type="text" 
                value={gender}
                onChange={(event)=>{
                  console.log(event.target.value);
                  setGender(event.target.value);
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

export default SecondStorePage;