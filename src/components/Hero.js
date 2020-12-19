import React from 'react'
import PropTypes from 'prop-types'

import {
  Flex,
  Box,
  Heading,
  Button,
  Link,
  Text,
  Stack,
  Image
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'

const Hero = ({ title, subtitle, image, ctaLink, ctaText, ...rest }) => {
  return (
    <Flex
      align='center'
      justifyContent={{
        base: 'center',
        md: 'space-around',
        xl: 'space-between'
      }}
      flexDirection={{ base: 'column-reverse', md: 'row' }}
      wrap='no-wrap'
      minH='70vh'
      px={8}
      mb={16}
      {...rest}
    >
      <Box w={{ base: '80%', sm: '60%', md: '50%' }} mb={{ base: 12, md: 0 }}>
        <Image src={image} size='100%' rounded='1rem' shadow='2xl' />
      </Box>
      <Stack
        spacing={4}
        w={{ base: '80%', md: '40%' }}
        align={['center', 'center', 'flex-start', 'flex-start']}
      >
        <Heading
          as='h1'
          size='xl'
          fontWeight='bold'
          color='primary.800'
          textAlign={['center', 'center', 'left', 'left']}
        >
          {title}
        </Heading>
        <Heading
          as='h2'
          size='md'
          color='primary.800'
          opacity='0.8'
          fontWeight='normal'
          lineHeight={1.5}
          textAlign={['center', 'center', 'left', 'left']}
        >
          {subtitle}
        </Heading>
        <Link to={ctaLink}>
          <Button
            variantColor='primary'
            borderRadius='8px'
            py='4'
            px='4'
            lineHeight='1'
            size='md'
            rightIcon={<ChevronRightIcon />}
          >
            {ctaText}
          </Button>
        </Link>
        <Text
          fontSize='xs'
          mt={2}
          textAlign='center'
          color='primary.800'
          opacity='0.6'
        >
          No credit card required.
        </Text>
      </Stack>
    </Flex>
  )
}

export default Hero

Hero.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  image: PropTypes.string,
  ctaText: PropTypes.string,
  ctaLink: PropTypes.string
}

Hero.defaultProps = {
  title: 'React landing page with Chakra UI',
  subtitle:
    'This is the subheader section where you describe the basic benefits of your product',
  image: 'https://source.unsplash.com/collection/404339/800x600',
  ctaText: 'Create your account now',
  ctaLink: '/signup'
}
