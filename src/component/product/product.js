import React from "react";
import {Link} from "react-router-dom";
import {Card ,Image, CardImg} from "react-bootstrap";
import './product.css'
const Products = ({product}) => {

    return(

        <Card className="my-3 p-3 card">
            <Link to={`/product/${product._id}`}>

                <CardImg src={product.image} variant="top"   className='img-fluid shadow-4 rounded'/>

            </Link>
            <Card.Body className="text-center px-4 position-relative z-index-2 mt-n3n  ">
                <Card.Title as="div" >{product.name}</Card.Title>
            </Card.Body>

            <Card.Text as="h4" className="text-center  ">قیمت:{product.price} تومان</Card.Text>
            <Card.Body className="text-center px-4 position-relative z-index-2 mt-n3n btn_info ">

                <Link   to={`/product/${product._id}`} ><Card.Title className="  text-center " as="div" >مشاهده مشخصات محصول</Card.Title></Link>
            </Card.Body>
        </Card>
    )
}
export default Products