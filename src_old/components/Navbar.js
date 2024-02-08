import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/Logo.svg'


const Navbar = (props) => {
  let isLoggedIn=props.isLoggedIn;
  let setLoggine=props.setLoggine;
  // console.log(!isLoggedIn)
  return (
    <div className='flx'>
      <Link to="/">
        <img src={logo} className='ig'></img>
      </Link>
      <nav>
        <ul className='flxc'>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/">About</Link>
          </li>
          <li>
            <Link to="/">Contact</Link>
          </li>
        </ul>
      </nav>
      <div className='log'>
        { !isLoggedIn &&
          <Link to="/Login">
            <button >
              Login
            </button>
          </Link>
        }
        { !isLoggedIn &&
          <Link to="/Signup">
            <button >
             Sighn Up
            </button>
          </Link>
        }
        { isLoggedIn &&
          <Link to="/">
            <button onClick={() => {
                setLoggine(false);
              }}>
              Log Out
            </button>
          </Link>
        }
        { isLoggedIn &&
          <Link to="/Dashboard">
            <button>
               Dashboard
            </button>
          </Link>
        }
      </div>
    </div>
  )
}

export default Navbar
