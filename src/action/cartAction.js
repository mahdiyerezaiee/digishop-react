import axios from 'axios'
export const cartAction = (id) => async (dispatch, getState) => {
    const { data } = await axios.get(`https://react-redux-df888-default-rtdb.firebaseio.com/product/${id}.json`)

    dispatch({
        type: 'CART_ADD_ITEM',
        payload: {
            product: data._id,
            name: data.name,
            image: data.image,
            price: data.price,
            product_qty:data.product_qty

        },
    })

    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
}
export const removeFromCart = (id) => (dispatch , getState) =>{
    dispatch({
        type:'CART_REMOVE_ITEM',
        payload:id,
    })
    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
};
export const  increment = (id) => (dispatch) =>{
    dispatch({
        type:'INCREMENT',
        payload:id,
    })
};
export const decrement = (id) => (dispatch , getState) =>{
    dispatch({
        type:'DECREMENT',
        payload:id,
    })
    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
};
