import { Routes, Route } from 'react-router-dom'

import Login from './components/Authentification/Login'
import Layout from './components/Layout/Layout'
import Register from './components/Authentification/Register'
import HomePage from './components/Home/HomePage'


function App() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Layout />}></Route>
                <Route path="register" element={<Register />}></Route>
                <Route path="login" element={<Login />}></Route>
				<Route path="home" element={<HomePage />}></Route>
            </Routes>
        </div>
    )
}



export default App
