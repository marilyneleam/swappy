import { Routes, Route } from 'react-router-dom'

import Login from './components/Authentification/Login'
import Register from './components/Authentification/Register'
import HomePage from './components/Home/HomePage'
<<<<<<< HEAD
import Product from './components/Product/Product'
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
=======
import AddProduct from './components/AddProduct/AddProduct'
>>>>>>> e73e9274f1b478b6cbb28dfc523c4a3d6494b558


function App() {
    return (
        <div>
            <Header />
            <Navbar />
            <Routes>
<<<<<<< HEAD
                <Route path="/register" element={<Register />}></Route>
                <Route path="/login" element={<Login />}></Route>
                <Route path="/" element={<HomePage />}></Route>
                <Route path="/item" element={<Product />}></Route>
=======
                <Route path="/" element={<Layout />}></Route>
                <Route path="register" element={<Register />}></Route>
                <Route path="login" element={<Login />}></Route>
				<Route path="home" element={<HomePage />}></Route>
				<Route path="addproduct" element={<AddProduct />}></Route>
>>>>>>> e73e9274f1b478b6cbb28dfc523c4a3d6494b558
            </Routes>
        </div>
    )
}



export default App
