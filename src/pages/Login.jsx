import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setUser } from '../redux/authSlice';
import React from 'react';


const Login = () => {
  const [form, setForm] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [message, setMessage] = useState('');
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { fullName, email, password, confirmPassword } = form;
    if (!fullName || !email || !password || !confirmPassword) {
      setMessage('Error : All the fields are mandatory');
    } else {
      dispatch(setUser({ fullName, email, password }));
      setMessage('Successfully Signed Up!');
      setForm({ fullName: '', email: '', password: '', confirmPassword: '' });
    }
  };

  return (
    <div className="form-container">
      <h2>Signup</h2>
      <form onSubmit={handleSubmit}>
        <input name="fullName" placeholder="Full Name" value={form.fullName} onChange={handleChange} />
        <input name="email" placeholder="Email" value={form.email} onChange={handleChange} />
        <input name="password" type="password" placeholder="Password" value={form.password} onChange={handleChange} />
        <input name="confirmPassword" type="password" placeholder="Confirm Password" value={form.confirmPassword} onChange={handleChange} />
        <div className={message.includes('Error') ? 'error' : 'success'}>{message}</div>
        <button type="submit">Signup</button>
      </form>
    </div>
  );
};

export default Login;