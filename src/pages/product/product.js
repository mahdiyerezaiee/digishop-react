import React,{useState, useEffect} from "react";
import {Link ,useParams, useNavigate , Route ,Routes} from "react-router-dom";
// import products from "../products";
import {useDispatch, useSelector} from "react-redux";
import {Row, Col, Image, ListGroup, Button, Container} from "react-bootstrap";
import {ProductDetailAction} from "../../action/productAction";

import './product.css'

const Product = () => {

    const history= useNavigate()
    const params = useParams()
    const dispatch = useDispatch()
    const productDetail=useSelector((state )=> state.productDetail)
    const counter=useSelector((state )=> state.counter)

    const {loading , product} = productDetail
    // const [product , setProducts ]= useState({})
    useEffect(()=>{
        dispatch(ProductDetailAction(params.id))
        // const sendRequest= async () =>{
        //     const response = await axios.get(`http://localhost:8000/api/products/${params.id}`)
        //     setProducts(response.data)
        // }
        // sendRequest()
    },[dispatch])
    function addToCartHandler  ()  {
        history(`/cart/${params.id}`)
    }
    return(<div>
            <Container>

                {loading ? <h2>loading</h2> :  <Row>
                    <Col md={6} lg={6} className="my-3 text-end">
                        <div className="my-4">{product.name}</div>
                        <p className="my-4" >قیمت : {product.price} تومان </p>

                        <Button  onClick={addToCartHandler} className="btn btn-primary btn-add-to-cart" type="button">افزودن به سبد خرید</Button>
                    </Col>
                    <Col md={6} ><Image className="img-fluid img-p" src={product.image}/> </Col>
                    <Col md={12} className="my-4 description"><h3 className="my-4">مشخصات محصول</h3> <div className="my-4">{product.description}</div></Col>

                </Row>}
            </Container>
        </div>

    )
}
export default Product