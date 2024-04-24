import React, { useState, useEffect } from 'react';
import validator from 'validator';
import './Form.css';
import submitForm from '../../api/submitForm';
import { NavLink } from "react-router-dom";


const RegistrationForm = () => {
    const [email, setEmail] = useState('');
    const [fullname, setFullname] = useState('');
    const [isEmailValid, setIsEmailValid] = useState(false);
    const [isFullnameValid, setIsFullnameValid] = useState(false);
    const [isFormValid, setIsFormValid] = useState(false);

    useEffect(() => {
        setIsFormValid(isEmailValid && isFullnameValid);
    }, [isEmailValid, isFullnameValid]);

    const handleEmailChange = (event) => {
        const value = event.target.value;
        setEmail(value);
        setIsEmailValid(validator.isEmail(value));
    }

    const handleFullnameChange = (event) => {
        const value = event.target.value;
        setFullname(value);
        setIsFullnameValid(/^[a-zA-Z\s]*$/.test(value) && value.trim() !== '');
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (isFormValid) {
            const formData = {
                fullname: "tratest",
                email: "test@test.com",
                phone: "+7 ",
                campaign: "testcampaign"
            };

            submitForm(formData)
                .then(data => {
                    console.log(data);
                })
                .catch(error => {
                    console.error('Error:', error);
                });
        }
    }

    return (
        <div className="registration-container">
            <form className="registration-form" onSubmit={handleSubmit}>
                <h2 className='registration-title'>Open New Account</h2>
                <input
                    className="registration-input"
                    type="email"
                    name="email"
                    placeholder="Enter e-mail"
                    value={email}
                    onChange={handleEmailChange}
                    required
                />
                <div className='registration__error-container'>
                    {!isEmailValid && email.trim() !== '' && <p className="registration__error-message">Invalid email address</p>}
                </div>
                <input
                    className="registration-input"
                    type="text"
                    name="fullname"
                    placeholder="Enter your full name"
                    value={fullname}
                    onChange={handleFullnameChange}
                    required
                />
                <div className='registration__error-container'>
                    {!isFullnameValid && fullname.trim() !== '' && <p className="registration__error-message">Invalid full name</p>}
                </div>
                <button className="registration-btn" type="submit" disabled={!isFormValid}>Register</button>
                <p className='registration__text'>Or register via:</p>
                <div className="registration__links">
                    <a
                        className="registration__link registration__link-google"
                        href="https://www.google.com"
                        target="_blank"
                        rel="noopener noreferrer">
                    </a>
                    <a
                        className="registration__link registration__link-facebook"
                        href="https://www.facebook.com"
                        target="_blank"
                        rel="noopener noreferrer">
                    </a>
                    <a
                        className="registration__link registration__link-apple"
                        href="https://www.apple.com"
                        target="_blank"
                        rel="noopener noreferrer">
                    </a>
                </div>
                <p className='registration__caption'>Already have an account?
                <NavLink to="/singin" className='registration__login-link'> Log in</NavLink>
                </p>
                <p className='registration__caption'>By registreting you agree to our
                <NavLink to="/singin" className='registration__terms-link'> privacy policy</NavLink>
                </p>
            </form>
        </div>
    );
}

export default RegistrationForm;
