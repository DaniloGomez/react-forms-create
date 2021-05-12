import './productsCategoryRow.style.css';
import React from 'react';
import RowTable from '../productRow/productsRow.comp';

const CategoryRow =(props) => {
  return (
    <div className="categories">
      {props.categoryName}
    </div>
  );
}


export default CategoryRow;