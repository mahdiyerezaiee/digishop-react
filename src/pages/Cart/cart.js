import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { ListGroup, Image, Button, Card, Table} from 'react-bootstrap'
import {useParams, useNavigate} from "react-router";
import {cartAction, removeFromCart,increment,decrement} from '../../action/cartAction'
import './cart.css'

const Cart = () => {
    const params = useParams()
    const {id: productId} = params
    const counter=useSelector((state )=> state.counter)
    const dispatch = useDispatch()
    const cart = useSelector((state) => state.cart)
    const {cartItems} = cart

    useEffect(() => {
        if (productId ) {
            dispatch(cartAction(productId ))
        }
    }, [dispatch, productId])

    const removeFromCartHandler = (id) => {
        dispatch(removeFromCart(id))
    }


    return (
        <div>
            {/*<h2 className="text-center mx-2">سبد خرید</h2>*/}
            {cartItems && cartItems.length === 0 ? (
                <p>سبد خرید خالی است</p>
            ) : (
                <Table bordered hover responsive variant="flush">
                    <thead className="my-4">
                    <tr>
                        <th md={3} className="cart-info">
                            مشخصات ظاهری
                        </th>
                        <th md={2} className="cart-info">نام محصول</th>
                        <th md={2} className="cart-info">تعداد</th>

                        <th md={2} className="cart-info"> قیمت</th>
                        <th md={2} className="cart-info">
                            حدف
                        </th>
                    </tr>
                    </thead>
                    {cartItems && cartItems.map((item) => (
                        <tbody key={item.product}>
                        <tr>
                            <td md={3} className="cart-info">
                                <Image src={item.image} alt={item.name} className="img-cart"/>
                            </td>

                            <td md={2} className="cart-info">{item.name}</td>
                            <td md={2} className="cart-info">
                                <button   type="button" onClick={()=>dispatch(increment(item))}>
                                    <i className="fa fa-plus"></i></button>
                                <p > {item.product_qty}</p>
                                <button  type="button" onClick={()=>dispatch(decrement(item))}>
                                    <i className="fa fa-minus"></i></button>
                            </td>
                            <td md={2} className="cart-info"> تومان <span
                                className="d-inline">{item.price}</span></td>
                            <td md={2} className="cart-info">
                                <Button
                                    type="button"
                                    variant="outline-primary"
                                    onClick={() => removeFromCartHandler(item.product)}
                                >
                                    <i className="fa fa-trash"></i>
                                </Button>
                            </td>
                        </tr>
                        </tbody>
                    ))}
                </Table>
            )}
            <Card>
                <ListGroup variant="flush">
                    <ListGroup.Item className="text-center total-price">
                        قیمت کل: {cartItems && cartItems.reduce((acc, item) => acc + item.price * item.product_qty , 0)} تومان
                    </ListGroup.Item>
                </ListGroup>
            </Card>
        </div>
    )
}

export default Cart
