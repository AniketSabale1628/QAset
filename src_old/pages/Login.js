import React from 'react'
import loginImg from '../assets/login.png'
import Template from '../components/Template'
const Login = ({setLoggine}) => {
  return (
    <Template
      title="Welcome Back"
      desc1="Build skills for today, tomorrow, and beyond."
      desc2="Education to future-proof your career."
      image={loginImg}
      formtype="login"
      setLoggine={setLoggine}
    />
  )
}

export default Login
