// EmailInput.js
import React, { useState } from 'react';
import './EmailInput.css';

const EmailInput = ({ onEmailSubmit }) => {
    const [email, setEmail] = useState('');

    const handleInputChange = (e) => {
        setEmail(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Pass the email to the parent component (or handle it as needed)
        onEmailSubmit(email);
    };

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="email"><h2>Enter email address:</h2></label>
            <input
                type="email"
                id="email"
                placeholder="example@example.com"
                value={email}
                onChange={handleInputChange}
                required
            />
            <button type="submit">Submit</button>
        </form>
    );
}

export default EmailInput;
