import React from 'react';
import { useNavigate,useLocation } from 'react-router-dom';

const AfterLogin = () => {
const navigate=useNavigate()
const location=useLocation()
const dating=location.state

    function handle_login()
    {
        navigate('/NewUser')
    }
    

    function moving_forward()
    {
        navigate('/LoginPage')
    }

    return (
        
        <div className='login-page-confirmation'>
            <img src='logo.png' className='sign-up-page-logo' alt='twitter-logo' width="50px" height="50px" /><br />
            {
                dating?.map((item)=>{
                    return(
                        <>
                        <h3> Your username:</h3>{item.ename}
                        <h4>This email is registerd:</h4>{item.email}
                        </>
                    )
                })
            }
            <button  className=' back-btn' onClick={handle_login}>BACK to Login</button>
            <button className='forward' onClick={moving_forward}>OK</button>
        </div>
    )
}

export default AfterLogin
