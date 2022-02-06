import React from 'react';
import '../CSS/SignInPage.css'
import { useState, useEffect } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { auth} from "../../firebase.js";
import { Link } from 'react-router-dom';
import Profilepage from './Profilepage';


function SignUpPage() {

  const [signIn,setSignIn] = useState(true)
  const [signUp,setSignUp] = useState(false)
  const [freelancer,setFreelancer] = useState(true)
  const [businessOwner,setBusinessOwner] = useState(false)
  const [authenticated,setAuth] = useState(false)


  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [user, setUser] = useState({});

  function handleSignIn() {
    setSignIn(true)
    setSignUp(false)
  }
  function handleSignUp() {
    setSignIn(false)
    setSignUp(true)
  }
  function handleFreelancer() {
    setFreelancer(true)
    setBusinessOwner(false)
  }
  function handleBusinessOwner() {
    setFreelancer(false)
    setBusinessOwner(true)
  }




  onAuthStateChanged(auth, (currentUser) => {
    if(currentUser){
      setAuth(true)
    }else{
      setAuth(false)
    }
    setUser(currentUser);
  });

  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  };

  const logout = async () => {
    await signOut(auth);
  };

useEffect(()=>{
  console.log(authenticated)
},[authenticated])

  const register = async () => {
    console.log(registerEmail)
    console.log(registerPassword)
    try{
        const user = await createUserWithEmailAndPassword(auth, registerEmail, registerPassword)
        console.log(user)
    }catch(error){
        console.log(error.message);
    }    

  }

  return (

<>

  <div className='SignUpPage'>

    <div className='information'>
      <section className='header'>
        <button className={`log-in ${signIn === true ? 'true':''}`} onClick={handleSignIn}> Login </button>
        <button className={`sign-up ${signUp === true ? 'true':''}`} onClick={handleSignUp}> Sign Up </button>
      </section>
{/* Sign In */}
      {signIn && <section className='login-content'>
        <p className='title'> Sign In </p>
        <p className='description'> Sign in to continue to our application </p>
        <div className='input'>
          <input className='input-box' placeholder='youremail@gmail.com' onChange={(e)=>setLoginEmail(e.target.value)}/>
          <div className='image-email'/>
        </div>
        <div className='input'>
          <input className='input-box' placeholder='Password' onChange={(e)=>setLoginPassword(e.target.value)}/>
          <div className='image-password'/>
        </div>
        <button className='button'>
        Sign In
      </button>
      </section>}
{/* Sign Up */}
      {signUp && <section className='signup-content'>
        
        <p className='title'> Sign Up </p>
        <p className='description'> Sign up in to continue to our application </p>
        <div className='Options'>
        <button onClick={handleFreelancer} id='options' className={`freelancer-option ${freelancer === true ? 'true':''}`}>I'm a Freelancer</button>
        <button onClick={handleBusinessOwner} id='options' className={`business-option ${businessOwner === true ? 'true':''}`}>I'm a Business Owner</button>
      </div>
        <div className='input'>
          <input className='input-box' placeholder={freelancer === true ? 'Full Name':'Company Name'}/>
        </div>
        <div className='input'>
          <input className='input-box' placeholder='youremail@gmail.com' onChange={(e)=>setRegisterEmail(e.target.value)}/>
        </div>
        <div className='input'>
          <input className='input-box' placeholder='Password' onChange={(e)=>setRegisterPassword(e.target.value)}/>
        </div>
        <div className='input'>
          <input className='input-box' placeholder='Confirm Password'/>
        </div>


      
      <button onClick={register} className='button'>
      Sign Up
    </button>
      
      

      </section>}
    </div>

  </div>
  </>
  );
}

export default SignUpPage;
