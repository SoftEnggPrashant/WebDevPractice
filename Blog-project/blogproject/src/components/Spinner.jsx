import { VStack } from '@chakra-ui/react'
import React from 'react'

const Spinner = () => {
  return (
    <VStack h={'100vh'} justifyContent={'center'} >
    <div className='spinner'></div>
    </VStack>
  )
}

export default Spinner