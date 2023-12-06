import React, { useEffect } from 'react';
import './index.css';
import { Link } from 'react-router-dom';
import { useState  } from 'react';
import { useNavigate } from 'react-router-dom';
import { createContext } from 'react';

export const content = createContext()

// let store;
const NewUser = () => {

  const navigate = useNavigate();

  const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i
  const pass_regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [ename, setEname] = useState("");
  const [complete, setComplete] = useState([]);
  const [tempArr, setTempArr] = useState([]);

  <content.Provider value={tempArr}>
  </content.Provider>

  const per = () => {
    navigate('/')
  }

  let result = regex.test(email)
  let res_pass = pass_regex.test(password)

  const validation = () => {
    if (email === "" || password === "" || ename === "") {
      alert("Please Fill out the empty fields");
    }

    else if (!result &&  !res_pass) {
      alert("Your Inputs doesn't match our Requirements")
    }

    else {
      alert("Email is verified & Password strength is good")
      console.log(email)
      setTempArr([...tempArr, { ename, email, password }]);
      setEmail("")
      setPassword("")
      setEname("") 
    }
  }
  useEffect(() => {

    if (tempArr.length > 0) {
      localStorage.setItem("input_value", JSON.stringify(tempArr))
      ajith();

    }
    console.log(tempArr)     // finally got it.....
  
  }, [tempArr])

  

  function ajith(){
    navigate('/AfterLogin', {state:tempArr})
  }


  return (
    <div className='new-user'>
      <img src='logo.png' className='sign-up-page-logo' alt='twitter-logo' width="50px" height="50px" /><br />
      <h3 className='welcoming'>Welcome buddy!</h3>
      <input type="text" className='text-box' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Enter your email' /> <br />
      <input type="password" className='text-box' value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Enter your password' /> <br />
      <input type="text" className='text-box' value={ename} onChange={(e) => setEname(e.target.value)} placeholder="Enter your Preferred Username" /><br />
      <button className='signup' onClick={() => validation()}>SIGN-UP</button>
      <Link to='/ForgotPassword' className='black-color'><p className='forgot'><u>Forgot password</u></p></Link><br />
      <button onClick={per} className='previous'>HOME</button>
    </div>
  )
}

export default NewUser;
