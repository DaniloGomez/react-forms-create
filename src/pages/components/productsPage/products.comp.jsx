
import ProductsTable from '../productRow/productsRow.comp';


const ShoesPage =(props) => {
  
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

export default ShoesPage;