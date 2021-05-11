import '../products/productsRow.style.css';
import React, { Component, useState } from 'react';
import formTable from '../form/form.comp';

const ProductsTable = (props) => {
  
    //console.log({props});


         /// const [products, setProducts] = useState(productsList);

      return (
        <div className="product-table">
            
        </div>
      );
  }


    /*

class Table extends Component {
  render() {
      var heading = this.props.heading;
      var body = this.props.body;
      return (
          <table style={{ width: 500 }}>
              <thead>
                  <tr>
                      {heading.map(head => <th>{head}</th>)}
                  </tr>
              </thead>
              <tbody>
                  {body.map(row => <TableRow row={row} />)}
              </tbody>
          </table>
      );
  }
}

class TableRow extends Component {
  render() {
      var row = this.props.row;
      return (
          <tr>
              {row.map(val => <td>{val}</td>)}
          </tr>
      )
  }
}*/

export default ProductsTable;