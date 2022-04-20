import React ,{ useEffect , useState}from "react";
// import axios from "axios";
// import products from "../products";
import {useDispatch  , useSelector} from "react-redux";
import Product from "../../component/product/product";
import {ProductListAction} from "../../action/productAction";
import {Row , Col} from "react-bootstrap";
import axios from "axios";
import {Container} from "react-bootstrap";

const Home = () => {
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
        <div>
            <Container>
                {/*<h1>product</h1>*/}
                <Row>
                    {products.map((item) =>{
                        return(


                            <Col key={item._id} sm={12} md={6} lg={4}>
                                <Product product={item}/>
                            </Col>


                        )
                    })}
                </Row>
            </Container>
        </div>
    )
}
export default Home