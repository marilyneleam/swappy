import { Routes, Route } from 'react-router-dom'

import Login from './components/Authentification/Login'
import Register from './components/Authentification/Register'
import HomePage from './components/Home/HomePage'
import Product from './components/Product/Product'
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'


function App() {
    return (
        <div>
            <Header />
            <Navbar />
            <Routes>
                <Route path="/register" element={<Register />}></Route>
                <Route path="/login" element={<Login />}></Route>
                <Route path="/" element={<HomePage />}></Route>
                <Route path="/item" element={<Product />}></Route>
            </Routes>
        </div>
    )
}



export default App
