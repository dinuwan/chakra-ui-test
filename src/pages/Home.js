import React from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import { Flex } from '@chakra-ui/react'

const Home = props => {
  return (
    <Flex
      direction='column'
      align='center'
      maxW={{ xl: '1200px' }}
      m='0 auto'
      {...props}
    >
      <Header />
      {props.children}
      <Hero />
    </Flex>
  )
}

export default Home
