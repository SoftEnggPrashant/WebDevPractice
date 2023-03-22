import { Spinner, VStack } from '@chakra-ui/react'
import React from 'react'

const Loader = () => {
  return (
    <VStack w={'full'} h={'80vh'} justifyContent={'center'}>
        <Spinner size='xl' color='blue'/>
    </VStack>
  )
}

export default Loader