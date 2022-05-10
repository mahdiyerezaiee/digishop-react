import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import {
    ProductListReducer,
    ProductDetailReducer,
} from './reducer/ProductReducer'

import { cartReducer } from './reducer/cartReducer'

const reducer = combineReducers({
    productList: ProductListReducer,
    productDetail: ProductDetailReducer,
    cart: cartReducer,
})

const cartItemsFromLocalStorage = localStorage.getItem('cartItems')
    ? JSON.parse(localStorage.getItem('cartItems')):[]

const initialState = {
    cart: { cartItems: cartItemsFromLocalStorage },

}

const middleware = [thunk]
const store = createStore(reducer, initialState, applyMiddleware(...middleware))

export default store