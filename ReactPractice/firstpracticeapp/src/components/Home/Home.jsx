import React, { useState } from 'react'
import ChildComponent from './ChildComponent'

const Home = () => {

    const[title,setTitle] = useState('Home');

    const homeFunction = (obj)=>{
        console.log(obj);
        setTitle(obj.title);
    }

  return (
    <div>
      <h1>{title}</h1>
      <ChildComponent changeTitle={homeFunction}/>
    </div>
  )
}

export default Home
