import React from 'react'
import { Box, Flex, Heading, Spacer } from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Button, ButtonGroup } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom';
export const Navbar = ({ toggleColorFlag }) => {
  const navigate = useNavigate();
    return (
      <Flex align="center" boxShadow="base" p="2" mb="2">
        <Box p="2">
          <Heading size="lg">Avengers!!</Heading>
        </Box>
        <Spacer />
        <Box>
        <Button colorScheme='blue' onClick={() =>navigate('App3')}>Images</Button>
        </Box>
        <Spacer />
        <Box>
        <Button colorScheme='blue' onClick={() =>navigate('App2')}>Videos</Button>
        </Box>
        <Spacer />
        <Box>
          <ColorModeSwitcher toggleColorFlag={toggleColorFlag}/>
        </Box>
      </Flex>
    );
  };