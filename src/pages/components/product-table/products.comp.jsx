import '../products/products.style.css';
import ProductsTable from '../products/productsRow.comp';


const ProductsPage =(props) => {
  
//console.log({props});

  return (
    <div className="tablepage">
      {props.productsList.map((product, index)=>{
        
        <ProductsTable
          productName={product.name}
        />
      })}
      
    </div>
  );
}

export default ProductsPage;