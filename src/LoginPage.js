import React from 'react';
import './index.css';
// import { useLocation } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';
// import {content} from './NewUser';     // wasted...   need some work on it....
import {useState} from 'react';


const LoginPage = () => {

  const [naming,setNaming]=useState({
    email:"",
    password:''
  });

  console.log(naming)

const handlepython=(e)=>{
  e.preventDefault()

  const getting=localStorage.getItem("input_value");
  console.log(getting)

  const userdata=JSON.parse(getting)
  console.log(userdata);

  userdata.filter((element,values)=>{
    if(element.email===naming.email && element.password===naming.password){
      alert("login is succesful")
      
      naming.email="";
      naming.password="";

      
    }else{
      alert("wasted")
    }
  })
}

  const  changes=(e)=>{
    const{value,name}=e.target

    setNaming(()=>{
      return{
        ...naming,[name]:value
      }
    })

  }


  return (
  <div className='new-user'>
    <img src='logo.png'  className='sign-up-page-logo' alt='twitter-logo' width="50px" height="50px"/><br/>
    <h3 className='welcoming_1'>Hello User! We Missed You..</h3>
   
    <input type="text" className='text-box' name="email" onChange={changes} placeholder='Enter your email' /> <br/>
    <input type="text" className='text-box' name="password" onChange={changes} placeholder='Enter your password'/> <br/>
    <button className='signup' onClick={handlepython}>SIGN-IN</button>
      
</div>
  )
}

export default LoginPage;
