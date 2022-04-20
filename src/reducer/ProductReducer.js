 export const ProductListReducer = (state={products:[]}, action) => {
  switch (action.type) {
      case 'PRODUCT-LIST-REQUEST':
          return{loading : true , products: []}
      case 'PRODUCT-LIST-SUCCESS':
          return {loading: false, products: action.payload}
      default:
          return state
  }
}
 export const ProductDetailReducer = (state={product:{}}, action) => {
     switch (action.type) {
         case 'PRODUCT-DETAIL-REQUEST':
             return{loading : true ,...state}
         case 'PRODUCT-DETAIL-SUCCESS':
             return {loading: false, product: action.payload}
         default:
             return state
     }
 }