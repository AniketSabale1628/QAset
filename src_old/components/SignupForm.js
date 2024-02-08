import React, { useState } from 'react'
import {AiOutlineEye , AiOutlineEyeInvisible} from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'

const SignupForm = ({setLoggine}) => {
    const [formData , setFormData]=useState({
        firstName:"",
        lastName:"",
        email:"",
        password:"",
        confirmPasswor:""
    })

    const navigate=useNavigate()

    const [showPassword,setShowPassword]=useState(false)

    function changeHandler(event){
      setFormData((prevData)=>({
       ...prevData,
       [event.target.name]:event.target.value
      }))
   }

    function submitHandler(event){
      event.preventDefault();
      if(formData.password != formData.confirmPasswor){
        alert("It not valid");
        return;
      }
      setLoggine(true);
      navigate("/dashboard")
   }
  return (
    <div>
      <div>
        <button>Student</button>
        <button>Instructor</button>
      </div>

      <form onSubmit={submitHandler}>
        <div>
          <label>
            <p>
              First Name<sup>*</sup>
            </p>
            <input
               type="text"
               required
               placeholder="Enter First Name"
               onChange={changeHandler}
               value={formData.firstName}
               name="firstName"
            ></input>
          </label>

          <label>
            <p>
              Last Name<sup>*</sup>
            </p>
            <input
              type="text"
              required
              value={formData.lastName}
              onChange={changeHandler}
              name='lastName'
              placeholder="Enter Last Name "
            ></input>
          </label>
        </div>

        <label>
          <p>
            Email Address<sup>*</sup>
          </p>
          <input
            type="email"
            required
            value={formData.email}
            onChange={changeHandler}
            name='email'
            placeholder="Enter email Id "
          ></input>
        </label>

        <div>
          <label>
            <p>
              Create Password<sup>*</sup>
            </p>
            <input
              type={showPassword ? ("text"):("password")}
              required
              value={formData.password}
              onChange={changeHandler}
              name='password'
              placeholder="Enter Password "
            ></input>
             <span onClick={()=>setShowPassword((prev)=>!prev)}>{showPassword ? (<AiOutlineEyeInvisible/>):(<AiOutlineEye/>)}</span>
          </label>
          
          <label>
            <p>
              Confirm Passwor<sup>*</sup>
            </p>
            <input
              type={showPassword ? ("text"):("password")}
              required
              value={formData.confirmPasswor}
              onChange={changeHandler}
              name='confirmPasswor'
              placeholder="Enter confirm Password "
            ></input>
             <span onClick={()=>setShowPassword((prev)=>!prev)}>{showPassword ? (<AiOutlineEyeInvisible/>):(<AiOutlineEye/>)}</span>
          </label>
    
        <button>Create Account</button>
        </div>
      </form>
    </div>
  );
}

export default SignupForm
