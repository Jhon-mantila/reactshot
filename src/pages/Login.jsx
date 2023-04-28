import React, { useRef } from 'react'
import '../styles/Login.scss';

import logo_yard from '@logos/logo_yard_sale.svg';
const Login = () => {
    
    const form = useRef(null);
    
    const handleSubmit = (event) =>{
        event.preventDefault();
        const formData = new FormData(form.current);
        const data = {
           username: formData.get('email'),
           password: formData.get('password')
        }
        console.log(data);
    }

    return (
        <div className="login-email">
            <div className="form-container-login">
                <img src={logo_yard} alt="logo" className="logo" />
                <form action="/" className="form-login" ref={form}>
                    <label className="label">Email address</label>
                    <input type="email" name="email" placeholder="jhon@3ztech.com.co" className="input input-email" />
                    <label className="label">Password</label>
                    <input type="password" name="password" placeholder="********" className="input input-password" />
                    <button className="primary-button login-button" onClick={handleSubmit}>login</button>
                    <a href="/">Forgot my password</a>
                </form>
                <button className="secundary-button signup-button">Sign up</button>
            </div>
        </div>
    );
}

export default Login;