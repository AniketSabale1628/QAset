// import React, { useState } from 'react'
// import Signup from './Signup';
// import './form.css';
// import Login from './Login';
// const Form = () => {
//   const [activeComponent, setActiveComponent] = useState('cvv');

//   const handleButtonClick = (component) => {
//     setActiveComponent(component);
//   };
//   return (
//     <div className='container'>
//        <div className='Quizeloginbox'>
//         <h1 className='title'>QUIZZIE</h1>
//         <div>
//       <div>
//         <button className={activeComponent === 'cvv' ? 'btnsignup active' : 'btnsignup'} onClick={() => handleButtonClick('cvv')}>Sign Up</button>
//         <button className={activeComponent === 'Login' ? 'btnlogin active' : 'btnlogin'} onClick={() => handleButtonClick('Login')}>Log In</button>
//       </div>

//       <div className="cvv">
//         {activeComponent === 'cvv' && <Signup />}
//         {activeComponent === 'Login' && <Login />}
//       </div>
//     </div>
        
//        </div>
      
//     </div>
//   )
// }

// export default Form


import React, { useState } from 'react';
import Signup from './Signup';
import './form.css';
import Login from './Login';

const Form = () => {
  const [activeComponent, setActiveComponent] = useState('cvv');
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleButtonClick = (component) => {
    setActiveComponent(component);
  };



  return (
    <div className='container'>
      <div className='Quizeloginbox'>
        <h1 className='title'>QUIZZIE</h1>
        <div>
          <div>
            <button
              className={activeComponent === 'cvv' ? 'btnsignup active' : 'btnsignup'}
              onClick={() => handleButtonClick('cvv')}
            >
              Sign Up
            </button>
            <button
              className={activeComponent === 'Login' ? 'btnlogin active' : 'btnlogin'}
              onClick={() => handleButtonClick('Login')}
            >
              Log In
            </button>
          </div>

          <div className="cvv">
            {activeComponent === 'cvv' && <Signup/>}
            {activeComponent === 'Login' && <Login/>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
