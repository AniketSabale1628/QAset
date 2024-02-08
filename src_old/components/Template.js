import React from 'react'
import frameImage from '../assets/frame.png'
import SignupForm from './SignupForm'
import LoginForm from './LoginForm'
const Template = ({title, desc1,desc2,image,formtype ,setLoggine}) => {
  return (
    <div>
      <div>
        <h1>{title}</h1>
        <p>
            <span>{desc1}</span>
            <span>{desc2}</span>
        </p>
        {
            formtype === "signup" ?
            (<SignupForm setLoggine={setLoggine}/>):
            (<LoginForm setLoggine={setLoggine}/>)
        }

        <div>
            <div></div>
            <p>OR</p>
            <div></div>
        </div>

        <button>Sign Up With Google</button>
      </div>

      <div>
        <img src={frameImage}></img>
        <img src={image}></img>
      </div>
    </div>
  )
}

export default Template
