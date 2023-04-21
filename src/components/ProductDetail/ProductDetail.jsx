import { useState,useEffect } from 'react' 
import { useParams } from 'react-router-dom';
import './ProductDetail.css'
import axios, { Axios } from 'axios'
import ProductCard from '../ProductCard/ProductCard'
import {  useNavigate } from 'react-router-dom';
import "./ProductDetail.css"
import { Button, Space } from 'antd';
import { Image, Tag,Divider , Typography} from 'antd';

function ProductDetail(){
    const navigate = useNavigate();
    let {id} = useParams()
    let [product,setProduct]=useState([])
    const {  Title} = Typography;

    console.log(id)
    
    useEffect(()=>{
        axios.get(`https://fakestoreapi.com/products/${id}`).then((result)=>{
          setProduct(result.data)
          console.log(result.data)
        })
       
      },[]); 


    return(

        <div>
            <Title level={4}>Product detail :{ product.id}</Title>
            <ProductCard key={ product.id} id={product.id} title={product.title} price={product.price} image={product.image} description={ product.description}  rating={product.rating} category={product.category}/>
            <Button onClick={() => navigate(-1)}>Go back</Button>
        </div>

    );
}

export default ProductDetail

