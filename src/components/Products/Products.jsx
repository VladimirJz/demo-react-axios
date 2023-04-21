import { useState,useEffect } from 'react' 
import ProductCard from '../ProductCard/ProductCard';
import axios, { Axios } from 'axios'

function Products(){
    
    let [products,setProducts]=useState([])
  
    useEffect(()=>{
      axios.get("https://fakestoreapi.com/products/").then((results)=>{
        setProducts(results.data)
        console.log(results.data)
      })
     
    },[]);

    return(
        <>
      <h1>Lista de Productos</h1>
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