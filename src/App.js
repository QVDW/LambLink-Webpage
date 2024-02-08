import { BrowserRouter, Routes, Route, Link, NavLink } from 'react-router-dom';

import Home from './Home';
import FAQ from './FAQ';
import Tutorials from './Tutorials';
import Login from './Login';
import Register from './Register';
import Error from './Error';

import './App.css';
import Logo from './img/icon.png';

function App() {
    return (
        <BrowserRouter>
            <header>
                <div id="logo">
                    <NavLink to="/"><img src={Logo} alt="LambLink Logo" /></NavLink>
                </div>
                <div id="nav">
                    <ul>
                        <li><NavLink to="FAQ">FAQ</NavLink></li>
                        <li><NavLink to="Tutorials">Tutorials</NavLink></li>
                        <li><NavLink to="Login">Login</NavLink></li>
                    </ul>
                </div>
            </header>
            <routes>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="faq" element={<FAQ />} />
                    <Route path="tutorials" element={<Tutorials />} />
                    <Route path="login" element={<Login />} />
                    <Route path="register" element={<Register />} />
                    <Route path="*" element={<Error />} />
                </Routes>
            </routes>
        </BrowserRouter>
    );
}

export default App;