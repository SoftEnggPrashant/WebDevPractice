import { Button, HStack, Image } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'

function Header() {
  return (
    <HStack p={'2.5'} shadow={'base'} bgColor={'#13283a'} gap={5}>
        <Image src={logo}/>
        <Button variant={'unstyled'} color={'white'} _active={{color:'teal'}}>
            <Link to={'/'}>Home</Link>
        </Button>

        <Button variant={'unstyled'} color={'white'} _active={{color:'teal'}}>
            <Link to={'/exchanges'}>Exchanges</Link>
        </Button>

        <Button variant={'unstyled'} color={'white'} _active={{color:'teal'}}>
            <Link to={'/coins'}>Coins</Link>
        </Button>
    </HStack>
  )
}

export default Header
