import React, { useState } from 'react';
import style from "./Formuser.module.css";

const Form = (props) => {
  const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password,
            confirmPassword: confirmPassword
        };
        console.log('Form Data:', formData);
        // Handle form data as needed
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>First Name: </label>
                <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
            </div>
            <div>
                <label>Last Name: </label>
                <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} />
            </div>
            <div>
                <label>Email: </label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div>
                <label>Password: </label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <div>
                <label>Confirm Password: </label>
                <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
            </div>
            <button type="submit">Submit</button>
        </form>
    );
};

export default Form;
