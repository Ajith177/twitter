import React from 'react';

const ForgotPassword = () => {
  return (
    <div className='password-forgot-page'>
        <img src="logo.png" alt="twitter-logo" width="50px" height="50px"/><br/>
        <p className='text-email'>We will sent you an  4 digits-code to respective email you entered below.. </p>
        <input type="text" className='email-forgot-page' placeholder="Enter your email"/><br/>
        <button className='submit-btn'>SUBMIT</button>
    </div>
  )
}

export default ForgotPassword
