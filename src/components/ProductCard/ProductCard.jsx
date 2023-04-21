
import './ProductCard.css'
import { Link } from 'react-router-dom';
import { DollarOutlined } from '@ant-design/icons';
import { Space } from 'antd';
import { Rate, Badge } from 'antd'
import { Descriptions } from 'antd';
import { Image, Tag,Divider , Typography} from 'antd';
import { Card } from 'antd';

function ProductCard({title,price,image, id, description ,rating, category} ){
    const { Text, TextLink , Title} = Typography;
    const { Meta } = Card;
    return(

        <>
            <Card title={<Link to={`/products/${id}`}>{title}</Link> } hoverable style={{ width: 250,}} cover={<Image  src={image} width={200} alt={title}/>}>
                <Meta title={title} description= {` ${price} USD`} />
            </Card>

          <div className="product-info">
            <div>
                
            </div>
            {/* <a href={`/products/${id}` }>{title}</a> */}
           
            {rating &&
                <p>
                    Is available ! <Badge count={rating.count}  overflowCount={999} />
                </p>
                    
                }


                {description && <Text> {description} </Text>  }
                {rating &&  <Rate  allowHalf disabled value={rating.rate} /> }

            {description &&
            <>
            <Divider orientation="left"></Divider>
            <Descriptions title="Product details:">  
            <Descriptions.Item label="Product">{title}</Descriptions.Item>
            <Descriptions.Item label="Price">{price}</Descriptions.Item>
            <Descriptions.Item label="Category">
            <Tag color="blue">{category}</Tag>
                </Descriptions.Item>
            <Descriptions.Item label="Items availables">{rating.count}</Descriptions.Item>

            </Descriptions>
            </>
            }
            
        </div>
    </>

    );
}
export default ProductCard

