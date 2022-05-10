export const cartReducer = (state = { cartItems: [] }, action) => {
    switch (action.type) {
        case 'CART_ADD_ITEM':
            const item = action.payload

            const existingItem = state.cartItems.find(
                (i) => i.product === item.product
            )

            if (existingItem) {
                let addItem = []
                state.cartItems.map(item => {
                    if(item.product === action.payload.product){
                        item.product_qty += 1
                    }
                    return addItem.push(item)
                })
                return {
                    ...state,
                    cartItems: addItem,
                }

            } else {
                return {
                    ...state,
                    cartItems: [...state.cartItems, item],
                }
            }
        case 'CART_REMOVE_ITEM':
            return {
                ...state,
                cartItems: state.cartItems.filter((i) => i.product !== action.payload),
            }

        case 'INCREMENT':
            let addItem = []
            state.cartItems.map(item => {
                if(item.product === action.payload.product){
                    item.product_qty += 1
                }
                return addItem.push(item)
            })
            return {
                ...state,
                cartItems: addItem,
            }
        case 'DECREMENT':
            let removeItem = []
            state.cartItems.map(item => {
                if(item.product === action.payload.product){
                    item.product_qty -= 1
                }
                return removeItem.push(item)
            })
            return {
                ...state,
                cartItems: removeItem,
            }


        default:
            return state
    }
}
