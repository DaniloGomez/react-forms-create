import '../products/productsTable.style.css';
import React, { useState } from 'react';
import CategoryShoes from '../productCategoryRow/productsCategoryRow.comp';
import RowShoes from '../productRow/productsRow.comp';


const ShoesTable = (props) => {
  
    console.log({props});

         /// const [products, setProducts] = useState(productsList);

      return (
        <div className="product-table">
            <div>
                {props.productsList.map((category, index)=>{
                    return(
                        <React.Fragment key={category.id}>
                            <CategoryShoes categoryName={category.name}/>
                            {category.products.map((product, indexProduct)=>{
                                return(
                                    <RowShoes
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


export default ShoesTable;