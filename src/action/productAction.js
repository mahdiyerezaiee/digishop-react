import axios from "axios";
export const ProductListAction=()=> async (dispatch)=>{
    try {
        dispatch({type : 'PRODUCT-LIST-REQUEST'})
        const {data}= await axios.get('https://react-redux-df888-default-rtdb.firebaseio.com/product.json')
        dispatch({type:'PRODUCT-LIST-SUCCESS',
            payload: data,
        })

    }catch (error){
        console.log(error)
    }
}
export const ProductDetailAction=(id)=> async (dispatch)=>{
    try {
        dispatch({type : 'PRODUCT-DETAIL-REQUEST'})
        const {data}= await axios.get(`https://react-redux-df888-default-rtdb.firebaseio.com/product/${id}.json`)

        dispatch({type:'PRODUCT-DETAIL-SUCCESS',
            payload: data,
        })

    }catch (error){
        console.log(error)
    }
}