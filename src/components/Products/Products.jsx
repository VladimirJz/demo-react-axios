import { useState,useEffect } from 'react' 
import ProductCard from '../ProductCard/ProductCard';
import axios, { Axios } from 'axios'
import { Typography} from 'antd';

function Products(){
    
    let [products,setProducts]=useState([])
    const {  Title} = Typography;

    useEffect(()=>{
      axios.get("https://fakestoreapi.com/products/").then((results)=>{
        setProducts(results.data)
        console.log(results.data)
      })
     
    },[]);

    return(
        <>
      <Title level={3}>Product list</Title>
      {
        products && products.map((product)=>{
          return (
            <ProductCard key={ product.id} id={product.id} title={product.title} price={product.price} image={product.image}/>
            )

        } )
      }
      
    </>
    );
}
export default Products