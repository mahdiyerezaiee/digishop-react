import React from "react";
import {Link} from "react-router-dom";
import {Card, Image, CardImg, Table, Button} from "react-bootstrap";
import {decrement, increment} from "../../../action/cartAction";
// import './product.css'
const ProductsDashbord = ({product}) => {

    return(

<tr>

                <td md={3} className="cart-info">
                    <Image src={product.image} alt={product.name} className="img-cart" width="150px"/>
                </td>

                <td md={2} className="cart-info">{product.name}</td>

                <td md={2} className="cart-info"> تومان <span
                    className="d-inline">{product.price}</span></td>


        {/*<Card className="my-3 p-3 card">*/}


        {/*        <img src={product.image} variant="top"   className=' shadow-4 rounded'/>*/}

        {/*        <span  >{product.name}</span>*/}


        {/*    <p className="  ">قیمت:{product.price} تومان</p>*/}
        {/*    /!*<Card.Body className="text-center px-4 position-relative z-index-2 mt-n3n btn_info ">*!/*/}

        {/*    /!*    /!*<Link   to={`/product/${product._id}`} ><Card.Title className="  text-center " as="div" >مشاهده مشخصات محصول</Card.Title></Link>*!/*!/*/}
        {/*    /!*</Card.Body>*!/*/}
        {/*</Card>*/}
</tr>

    )
}
export default ProductsDashbord