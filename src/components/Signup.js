import React, { useState } from 'react';
import './Cvv.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const SignUpForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    // Clear the confirmPassword field when there's an error in the password field
    if (name === 'password') {
      setErrors({
        ...errors,
        confirmPassword: '',
      });
    }

    setErrors({
      ...errors,
      [name]: '', // Clear the error when the user starts typing
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let newErrors = {};
    let formIsValid = true;

    // Validate Name
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
      formIsValid = false;
    }

    // Validate Email
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
      formIsValid = false;
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
      formIsValid = false;
    }

    // Validate Password
    if (!formData.password.trim()) {
      newErrors.password = 'Password is required';
      formIsValid = false;
    }

    // Validate Confirm Password
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
      formIsValid = false;
    }

    setErrors(newErrors);

    if (formIsValid) {
      try {
        const response = await axios.post(
          'http://localhost:4000/api/v1/user/signup',
          formData
        );
        console.log(response.data);
        navigate('/dashboard');
      } catch (error) {
        // Handle server-side validation errors
        if (error.response && error.response.data && error.response.data.errors) {
          setErrors(error.response.data.errors);
        } else {
          console.error(error);
        }
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flexform">
        <label>
          <p>
            Name<sup>*</sup>
          </p>
        </label>
        <div className="input-container">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={errors.name ? 'invalid' : ''}
          />
          {errors.name && (
            <div className="error-message inside-input">{errors.name}</div>
          )}
        </div>
      </div>
      <div className="flexform">
        <label>
          <p>
            Email<sup>*</sup>
          </p>
        </label>
        <div className="input-container">
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={errors.email ? 'invalid' : ''}
          />
          {errors.email && (
            <div className="error-message inside-input">{errors.email}</div>
          )}
        </div>
      </div>
      <div className="flexform">
        <label>
          <p>
            Password<sup>*</sup>
          </p>
        </label>
        <div className="input-container">
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className={errors.password ? 'invalid' : ''}
          />
          {errors.password && (
            <div className="error-message inside-input">{errors.password}</div>
          )}
        </div>
      </div>
      <div className="flexform">
        <label>
          <p>
            Confirm Password<sup>*</sup>
          </p>
        </label>
        <div className="input-container">
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            className={errors.confirmPassword ? 'invalid' : ''}
          />
          {errors.confirmPassword && (
            <div className="error-message inside-input">
              {errors.confirmPassword}
            </div>
          )}
        </div>
      </div>

      <button className="btnform" type="submit">
        Sign-Up
      </button>
    </form>
  );
};

export default SignUpForm;
