import { useState,useEffect } from 'react' 
import { useParams } from 'react-router-dom';
import './ProductDetail.css'
import axios, { Axios } from 'axios'
import ProductCard from '../ProductCard/ProductCard'
import {  useNavigate } from 'react-router-dom';
import "./ProductDetail.css"
import { Button, Space } from 'antd';
import { Image,Spin ,Tag,Divider , Typography} from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
function ProductDetail(){

    const navigate = useNavigate();
    let {id} = useParams()
    let [product,setProduct]=useState([])
    const {  Title} = Typography;
    let[status,setStatus]=useState('')
    const antIcon = (<LoadingOutlined style={{ fontSize: 48, }} spin />)
    console.log(id)
    
    useEffect(()=>{
        setStatus('loading');
        axios.get(`https://fakestoreapi.com/products/${id}`).then((result)=>{
          setProduct(result.data)
          setStatus('success');
          console.log(result.data)
        })
       
      },[]); 


    return(

        <div>

           { status==='loading'?(
           <Spin indicator={antIcon}/>) :
              (<>
                <Title level={4}>Product detail :{ product.id}</Title>
                <ProductCard key={ product.id} id={product.id} title={product.title} price={product.price} image={product.image} description={ product.description}  rating={product.rating} category={product.category}/>
                <Button onClick={() => navigate(-1)}>Go back</Button>
              </>
                
                )
              }
                
          </div>
           


    );
}

export default ProductDetail

