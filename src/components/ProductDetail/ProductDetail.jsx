import { useState,useEffect } from 'react' 
import { useParams } from 'react-router-dom';
import './ProductDetail.css'
import axios, { Axios } from 'axios'
import ProductCard from '../ProductCard/ProductCard'
import {  useNavigate } from 'react-router-dom';
import "./ProductDetail.css"

function ProductDetail(){
    const navigate = useNavigate();
    let {id} = useParams()
    let [product,setProduct]=useState([])
    console.log(id)
    
    useEffect(()=>{
        axios.get(`https://fakestoreapi.com/products/${id}`).then((result)=>{
          setProduct(result.data)
          console.log(result.data)
        })
       
      },[]); 


    return(
        <div>
            <h1>Detalle del producto { product.id}</h1>
            <ProductCard key={ product.id} id={product.id} title={product.title} price={product.price} image={product.image} description={ product.description }/>
            <button onClick={() => navigate(-1)}>Go back</button>
        </div>

    );
}

export default ProductDetail

