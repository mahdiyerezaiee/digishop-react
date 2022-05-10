import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Profile from './pages/profile/profile'
import Register from './component/Form/Register'
import Login from './component/Form/Login'
import {useState, useEffect} from 'react'
import {AuthProvider} from './context/AuthContext'
import {auth} from './firebase/firebase'
import {onAuthStateChanged} from 'firebase/auth'
import PrivateRoute from './PrivateRoute'
import Header from "./component/Header/Header";
import VerifyEmail from "./verifyEmail";
import Home from "./pages/Home/home";
import ResetPassword from "./component/Form/resetPassword";
import Product from "./pages/product/product";
import Cart from "./pages/Cart/cart";
import Admin from "./Admin/admin";
import Products from "./Admin/pages/Product/Products";
// import useDarkMode from "./Hook/dark mode/dark-mode";
import React from ".";
function App() {
    // const [theme, toggleTheme] = useDarkMode()

    const [currentUser, setCurrentUser] = useState(null)
    const [timeActive, setTimeActive] = useState(false)

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            setCurrentUser(user)
        })
    }, [])

    return (
        <div
            className="app"
            // style={{
            //   background: theme === 'dark' ? '#212121' : '#ffffff',
            //   // color: theme === 'dark' ? '#ffffff' : '#212121',
            //   transition: '1s all',
            //   textAlign: 'center',
            // }}
        >
            <Router>
                <Header/>

                <AuthProvider value={{currentUser, timeActive, setTimeActive}}>
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                        <Route exact path='/profile' element={
                            <PrivateRoute>
                                <Profile/>
                            </PrivateRoute>
                        }/>
                        <Route path="/login" element={<Login/>} />
                        <Route path="/admin" element={<Admin/>}/>
                        <Route path="/products" element={<Products/>}/>

                        <Route path="/register" element={<Register/>} />
                        <Route path='/verify-email' element={<VerifyEmail/>} />
                        <Route path='/reset-password' element={<ResetPassword/>} />
                        <Route path='/cart' element={<Cart/>}/>
                        <Route path='/cart/:id' element={<Cart/>}/>

                        <Route path='/product/:id' element={<Product/>}/>



                    </Routes>
                </AuthProvider>
            </Router>
        </div>
    );
}

export default App;