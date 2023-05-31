import { Routes, Route } from 'react-router-dom'

import Login from './components/Authentification/Login'
import Register from './components/Authentification/Register'
import HomePage from './components/Home/HomePage'


function App() {
    return (
        <div>
            <Routes>
                <Route path="/register" element={<Register />}></Route>
                <Route path="/login" element={<Login />}></Route>
				<Route path="/" element={<HomePage />}></Route>
            </Routes>
        </div>
    )
}



export default App
