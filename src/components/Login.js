// import './Card.css';
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// const LoginForm = () => {
//   const navigate = useNavigate();

//   const [formData, setFormData] = useState({
//     email: '',
//     password: '',
//   });

//   const [errors, setErrors] = useState({
//     email: '',
//     password: '',
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//     setErrors({
//       ...errors,
//       [name]: '',
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Validation logic
//     let newErrors = {};

//     if (!formData.email.trim()) {
//       newErrors.email = 'Email is required';
//     }

//     if (!formData.password.trim()) {
//       newErrors.password = 'Password is required';
//     }

//     // Update the errors state
//     setErrors(newErrors);

//     // If there are no errors, navigate to the dashboard
//     if (Object.keys(newErrors).length === 0) {
//       // Your logic here (e.g., submit the form, make an API call)
//       console.log('Form submitted successfully:', formData);

//       // Navigate to the dashboard
//       navigate('/dashboard');
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <div className={`flexform ${errors.email ? 'error' : ''}`}>
//         <label>
//           <p>Email<sup>*</sup></p>
//         </label>
//         <div className="input-container">
//           <input
//             type="text"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             className={errors.email ? 'invalid' : ''}
//           />
//           {errors.email && (
//             <div className="error-message inside-input">{errors.email}</div>
//           )}
//         </div>
//       </div>

//       <div className={`flexform ${errors.password ? 'error' : ''}`}>
//         <label>
//           <p>Password<sup>*</sup></p>
//         </label>
//         <div className="input-container">
//           <input
//             type="password"
//             name="password"
//             value={formData.password}
//             onChange={handleChange}
//             className={errors.password ? 'invalid' : ''}
//           />
//           {errors.password && (
//             <div className="error-message inside-input">{errors.password}</div>
//           )}
//         </div>
//       </div>

//       <button className="btnformlogin" type="submit">
//         Sign In
//       </button>
//     </form>
//   );
// };

// export default LoginForm;


import './Card.css';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const LoginForm = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({
    email: '',
    password: '',
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setErrors({
      ...errors,
      [name]: '',
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation logic
    let newErrors = {};

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    }

    if (!formData.password.trim()) {
      newErrors.password = 'Password is required';
    }

    // Update the errors state
    setErrors(newErrors);

    // If there are no errors, navigate to the dashboard
    if (Object.keys(newErrors).length === 0) {
      try {
        setLoading(true); // Set loading to true

        const response = await axios.post('http://localhost:4000/api/v1/user/login', formData);
        console.log(response.data);
        navigate('/dashboard');
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false); // Reset loading state
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className={`flexform ${errors.email ? 'error' : ''}`}>
        <label>
          <p>Email<sup>*</sup></p>
        </label>
        <div className="input-container">
          <input
            type="text"
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

      <div className={`flexform ${errors.password ? 'error' : ''}`}>
        <label>
          <p>Password<sup>*</sup></p>
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

      <button className="btnformlogin" type="submit" disabled={loading}>
        {loading ? 'Signing In...' : 'Sign In'}
      </button>
    </form>
  );
};

export default LoginForm;
