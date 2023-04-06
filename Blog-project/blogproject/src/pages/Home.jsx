import { VStack } from '@chakra-ui/react'
import React from 'react'
import Blogs from '../components/Blogs'
import Pagination from '../components/Pagination'

const Home = () => {
  return (
    <VStack>
        <Blogs />
        <Pagination />
    </VStack>
  )
}

export default Home