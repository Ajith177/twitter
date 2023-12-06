import React from 'react';
import './index.css';
import { Link } from 'react-router-dom';

const FirstPage = () => {

  return (
    <div className="App">
    <div className="main-box">
      <h3>See whats Happening in the world Right now</h3>
    </div>

    <div className='logo'>
      <img src='logo.png' alt='img' width='50px' height='50px'/>
    </div>

    <div className='google-login'>
      <h3> <img src='google.png' alt='google-logo'  className="googly" width='40px' height='30px'/> Continue with Google</h3>
    </div>
    <div className='Apple-login'>
      <h3> <img src='Apple-Logo.png' alt='apple-logo'width='40px' className='apply' height='30px'/>  Continue with apple</h3>
    </div>
    <p className='border-bot'>(OR)</p>

    <div className='account-creation-email'>

     <Link  className="white-color" to='/NewUser'><h3>Create an account</h3></Link>

    </div>
    <p className='terms'>By signing up, you agree to our Terms,Privacy <br/>
    policy, and Cookie Use.</p>
    <Link className='black-color' to="/LoginPage"><p className='direct-to-login'>Already have an account?<u className='login-underline'>LOGIN</u></p></Link>

  </div>

  )
}

export default FirstPage;
