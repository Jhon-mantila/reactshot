import React from 'react';
import '@styles/RecoveryPassword.scss';

import email from '@icons/email.svg';
import logo_yard from '@logos/logo_yard_sale.svg';

const RecoveryPassword = () => {

    return (
        <div className="login">
        <div className="form-container">
            <img src={logo_yard} alt="logo" className="logo"/>
            <h1 className="title">Email has been sent!</h1>
            <p className="subtitle">Please check your inbox for instructions on how to reset the password</p>
            <div className="email-image">
                <img src={email} alt="email-image"/>
            </div>
            <button className="primary-button login-button">Login</button>
            <p className="resend">
                <span>Didn't receive the email?</span>
                <a href="/">Resend</a>
            </p>
        </div>
    </div>
    );
}

export default RecoveryPassword;