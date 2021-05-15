import '../second-shoes-table/productsTable.style.css';
import React, { useState } from 'react';
import SecondCategoryShoes from '../second-category-shoes/productsCategoryRow.comp';
import SecondRowShoes from '../second-product-row/productsRow.comp';


const SecondShoesTable = (props) => {
  
    console.log({props});

         /// const [products, setProducts] = useState(productsList);

      return (
        <div className="second-product-table">
            <div>
                {props.productsList.map((category, index)=>{
                    return(
                        <React.Fragment key={category.id}>
                            <SecondCategoryShoes categoryName={category.name}/>
                            {category.products.map((product, indexProduct)=>{
                                return(
                                    <SecondRowShoes
                                        key={product.id}
                                        product={product}
                                    />
                                );
                            })}
                        </React.Fragment>
                    );
                })}
            </div>
            
        </div>
      );
  }


export default SecondShoesTable;