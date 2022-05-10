import React ,{ useEffect , useState}from "react";
import {useDispatch  , useSelector} from "react-redux";
import {ProductListAction} from "../../../action/productAction";
import {Row, Col, Table} from "react-bootstrap";
import {Container} from "react-bootstrap";
import Sidebar from "../../components/sidebar/Sidebar";
import ProductsDashbord from "../../components/products/ProductsDashbord";
const ProductsAdmin = () => {
    const dispacht=useDispatch()

    const productList = useSelector((state)=> state.productList)
    const {loading , products}=productList
    // const [products , setProducts]=useState([])
    useEffect(()=>{
        dispacht(ProductListAction())
        // const sendRequest= async () =>{
        //     const response = await axios.get('https://react-redux-df888-default-rtdb.firebaseio.com/product.json')
        //     setProducts(response.data)
        //     console.log(sendRequest)
        // }
        // sendRequest()
    },[dispacht])
    return(
        <div className="home">
            <Sidebar />
            <div className="homeContainer">
                <Container>
                    {/*<h1>product</h1>*/}





                                <Table  sm={12} md={12} lg={12}>
                                    <thead className="my-4">
                                    <tr>
                                        <th md={3} className="cart-info">
                                            مشخصات ظاهری
                                        </th>
                                        <th md={2} className="cart-info">نام محصول</th>

                                        <th md={2} className="cart-info"> قیمت</th>

                                    </tr>
                                    </thead>
                                    <tbody >
                                    {products.map((item) =>{
                                        return(
                                    <ProductsDashbord key={item._id} product={item}/>

                                    )
                                    })}
                                    </tbody >
                        </Table>



                </Container>
                </div>
        </div>
    )
}
export default ProductsAdmin