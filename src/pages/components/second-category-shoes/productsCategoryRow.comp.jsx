import './productsCategoryRow.style.css';
import React from 'react';
import RowShoes from '../productRow/productsRow.comp';

const SecondCategoryShoes =(props) => {
  return (
    <div className="categories">
      {props.categoryName}
    </div>
  );
}


export default SecondCategoryShoes;