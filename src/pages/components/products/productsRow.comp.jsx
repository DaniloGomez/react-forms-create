import '../products/productsRow.style.css';
import React, { Component } from 'react';


class ProductsTable extends Component {
  render() {
      var heading = ['Name Product', 'City', 'Price'];
      var body =
          [['Egg', 'Manizales', '$ 350'],
          ['Rice', 'Pereira', '$ 2300'],
          ['Cookies', 'Bogotá', '$ 600'],
          ['Cake', 'Manizales', '$ 8500'],
          ['Cake', 'Manizales', '$ 8500'],
          ];
      return (
          <div >
              <Table heading={heading} body={body} />
          </div>
      );
  }
}

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
}

export default ProductsTable;