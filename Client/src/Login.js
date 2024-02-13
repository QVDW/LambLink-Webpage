import React, { useState } from 'react';

import RegisterImg from './img/Register.png';
import { Link } from 'react-router-dom';

const Register = () => {
    const [formData, setFormData] = useState({
        username: '',
        password: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    };

    return (
        <div id="register">
            <div id="registerIMG">
                <img src={RegisterImg} alt="Register" />
            </div>
            <div id="registerForm">
                <div id="registerFormPlacement">
                    <h1>Login</h1>
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="username">Username*</label>
                        <input type="text" name="username" placeholder="Username" required onChange={handleChange} />
                        <label htmlFor="password">Password*</label>
                        <input type="password" name="password" placeholder="Password" required onChange={handleChange} />
                        <input type="submit" value="Register" id="registerSubmit" />
                        <Link to="/register">Don't have an account? Register here.</Link>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Register;