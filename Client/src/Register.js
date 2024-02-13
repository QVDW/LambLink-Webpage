import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import RegisterImg from './img/Register.png';

const Register = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        repeatPassword: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission here
        console.log(formData);
    };

    return (
        <div id="register">
            <div id="registerIMG">
                <img src={RegisterImg} alt="Register" />
            </div>
            <div id="registerForm">
                <div id="registerFormPlacement">
                    <h1>Register</h1>
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="username">Username*</label>
                        <input type="text" name="username" placeholder="Username" required onChange={handleChange} />
                        <label htmlFor="email">Email*</label>
                        <input type="email" name="email" placeholder="Email" required onChange={handleChange} />
                        <label htmlFor="password">Password*</label>
                        <input type="password" name="password" placeholder="Password" required onChange={handleChange} />
                        <label htmlFor="repeatPassword">Repeat password*</label>
                        <input type="password" name="repeatPassword" placeholder="Password" required onChange={handleChange} />
                        <input type="submit" value="Register" id="registerSubmit" />
                        <Link to="/login">Already have an account? Login in.</Link>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Register;