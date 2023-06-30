import Products from '../components/Products/Products';
import DefaultLayout  from '../layout/DefaultLayout';



const ProductsList = () => {
    return (
        <Products/>
    )
  }

function StorePage(){




    return( <DefaultLayout currentPage={ProductsList} ></DefaultLayout> );
    }
    
export default StorePage