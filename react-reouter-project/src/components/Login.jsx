import React from 'react';
import Template from './Template';
import loginImg from '../assets/login.png';

const Login = (props) => {
  
  const {setIsAuthenticated} = props;

  return (
    <Template 
      title="Welcome Back"
      des1="Build skills for today, tomorrow, and beyond."
      des2="Education to future-proof your career."
      image={loginImg}
      formType="login"
      setIsAuthenticated={setIsAuthenticated}
    />
  )
}

export default Login