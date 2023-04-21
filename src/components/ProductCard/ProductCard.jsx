
import './ProductCard.css'
import { Link } from 'react-router-dom';

function ProductCard({title,price,image, id, description } ){
    return(
        <div className="product-info">
            <div>
                <Link to={`/products/${id}`}>{title}</Link>
            </div>
            {/* <a href={`/products/${id}` }>{title}</a> */}
                <p>{price}</p>
                

                <img  className='product-img' src={image} alt={title}/>
                {description && <p> {description} </p>  }
            
        </div>

    );
}
export default ProductCard

