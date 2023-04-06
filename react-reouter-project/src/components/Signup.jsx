import React from 'react'
import Template from './Template'
import signupImg from '../assets/signup.png'

const Signup = (props) => {
    const {setIsAuthenticated} = props
  return (
    <Template 
      title="Join the millions learning to code with StudyNotion for free"
      des1="Build skills for today, tomorrow, and beyond."
      des2="Education to future-proof your career."
      image={signupImg}
      formType="signup"
      setIsAuthenticated={setIsAuthenticated}
    />
  )
}

export default Signup