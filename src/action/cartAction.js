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
}

