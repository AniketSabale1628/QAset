import React, { useState } from 'react'
import {AiOutlineEye , AiOutlineEyeInvisible} from 'react-icons/ai'
import { Link, useNavigate } from 'react-router-dom';
const LoginForm = ({setLoggine}) => {
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });
    const [showPassword,setShowPassword]=useState(false)
    function changeHandler(event){
       setFormData((prevData)=>({
        ...prevData,
        [event.target.name]:event.target.value
       }))
    }

    function submitHandler(event){
       event.preventDefault();
       console.log(formData.email)
       setLoggine(true)
       navigate("/dashboard")
    }

  return (
    <form onSubmit={submitHandler}>
      <label>
        <p>
          Email Address<sup>*</sup>
        </p>
        <input
          type="email"
          required
          value={formData.email}
          name="email"
          onChange={changeHandler}
          placeholder="Enter email Id "
        ></input>
      </label>

      <label>
        <p>
          Password<sup>*</sup>
        </p>
        <input
          type={showPassword ? "text" : "password"}
          required
          value={formData.password}
          name="password"
          onChange={changeHandler}
          placeholder="Enter password "
        ></input>
        <span onClick={() => setShowPassword((prev) => !prev)}>
          {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
        </span>
        <Link to="#">
          <p>Forgot Password</p>
        </Link>
      </label>
      <button>Sign In</button>
    </form>
  );
}

export default LoginForm
