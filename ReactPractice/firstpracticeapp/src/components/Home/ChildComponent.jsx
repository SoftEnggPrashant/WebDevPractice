import { Button } from '@chakra-ui/react'
import React from 'react'

const ChildComponent = (props) => {

    const{changeTitle} = props;

    const data = {
        title:'child component data',
    }

    const clickHandler = ()=>{
        changeTitle(data);
    }
  return (
    <div>
      <Button onClick={clickHandler} >Send</Button>
    </div>
  )
}

export default ChildComponent
