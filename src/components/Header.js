import React, { useState } from 'react'
import { Flex, Box, Heading, Button, Text, Link } from '@chakra-ui/react'
import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons'

const MenuItem = ({ to = '/', children, isLast }) => {
  return (
    <Text
      display='block'
      mr={{ base: 0, sm: isLast ? 0 : 8 }}
      mb={{ base: isLast ? 0 : 8, sm: 0 }}
    >
      <Link to={to}>{children}</Link>
    </Text>
  )
}

const Header = props => {
  const [show, setShow] = useState(false)
  const toggleMenu = () => setShow(!show)

  return (
    <Flex
      as='nav'
      align='center'
      justify='space-between'
      wrap='wrap'
      w='100%'
      mb={8}
      p={8}
      // bg={['primary.500', 'primary.500', 'transparent', 'transparent']}
      // color={['white', 'white', 'primary.700', 'primary.700']}
      {...props}
    >
      <Flex align='center'>
        <Heading as='h1' size='md'>
          Awesome App
        </Heading>
      </Flex>
      <Box display={{ base: 'block', md: 'none' }} onClick={toggleMenu}>
        {show ? <CloseIcon /> : <HamburgerIcon />}
      </Box>
      <Box
        display={{ base: show ? 'block' : 'none', md: 'block' }}
        flexBasis={{ base: '100%', md: 'auto' }}
      >
        <Flex
          align='center'
          justifyContent={['center, space-between', 'flex-end', 'flex-end']}
          direction={['column', 'row', 'row', 'row']}
          pt={[4, 4, 0, 0]}
        >
          <MenuItem to='/how'>How it works</MenuItem>
          <MenuItem to='/solutions'>Solutions</MenuItem>
          <MenuItem to='/pricing'>Pricing</MenuItem>
          <MenuItem to='signup' isLast>
            <Button colorScheme='teal' size='sm' rounded='md'>
              Try it free
            </Button>
          </MenuItem>
        </Flex>
      </Box>
    </Flex>
  )
}

export default Header
