import React, { useEffect } from 'react';
import { useState } from 'react';
import {auth} from "../../src/firebase.js";
import { Routes ,Route, useNavigate } from 'react-router-dom'

const PrivateRoutes = ({ component: Component, ...rest }) => {
    const [isLoggedIn,setIsLoggedIn] = useState(false)
  // Add your own authentication on the below line.
  useEffect(()=>{
      if(auth.operationType === "signIn"){
        setIsLoggedIn(true)
      }else{
        setIsLoggedIn(false)
      }

  },[auth])

  useEffect(()=>{
      console.log(isLoggedIn)
  },[isLoggedIn])
  const navigate = useNavigate()
  return (
    <Routes>

    <Route
      {...rest}
      render={props =>
        isLoggedIn ? (
          <Component {...props} />
        ) : (
          navigate('/welcome-page')
        )
      }
    />
        </Routes>

  )
}

export default PrivateRoutes;
