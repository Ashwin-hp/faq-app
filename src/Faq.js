import React from 'react';
import {
  Box,
  Text,
  Flex,
  Heading,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from '@chakra-ui/react';
import FAQ_LIST from './faq.json';

export const Faq = ({index,setIndex}) => {
  return (
    <Flex direction="column" p="4"  
    // backgroundImage="linear-gradient(rgba(0, 0, 0, 0.527),rgba(0, 0, 0, 0.5)) , url('https://cdn.pixabay.com/photo/2020/07/02/19/40/marvel-5364185_960_720.jpg')"
    // backgroundPosition="center"
    // backgroundRepeat="no-repeat" 
    // backgroundSize="cover"
    // opacity="0.85"
    // zIndex="1"
    >
      <Box mb="12">
        <Heading size="md">Frequently Asked Questions</Heading>
      </Box>
      <Accordion allowToggle index={index} setIndex={setIndex}>
        {FAQ_LIST.map(faq => (
          <AccordionItem key={faq.id} mb="3">
            <AccordionButton onClick={() =>setIndex(faq.id-1)}>
              <Box flex="1" textAlign="left">
                <Text fontWeight="semibold">{faq.question}</Text>
              </Box>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel pb="4">{faq.answer}</AccordionPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </Flex>
  );
};