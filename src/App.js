import React, { useState, useEffect, useRef } from 'react';
import { ChakraProvider, theme } from '@chakra-ui/react';
import { Navbar } from './Navbar';
import { Faq } from './Faq';
import alanBtn from "@alan-ai/alan-sdk-web";
export const App = () =>{
  const alanBtnInstance = useRef(null);
  const [index, setIndex] = useState(null);
  const [currentFaqId, setCurrentFaqId] = useState(null);
  const [toggleColorFlag, setToggleColorFlag] = useState(false);
  useEffect(() => {
    if (!alanBtnInstance.current) {
      alanBtnInstance.current = alanBtn({
        key: 'dcbe66485406c7adb0418084a6ffdce02e956eca572e1d8b807a3e2338fdd0dc/stage',
        onCommand: commandData => {
          if (commandData.command === 'gotoFaq') {
            setIndex(commandData.faqId-1)
          }
          else if (commandData.command === 'toggleColorMode') {
            setToggleColorFlag(flag => !flag);
          }
        },
      });
    }
  }, []);
  return(
    <ChakraProvider theme={theme}>
      
      <Navbar toggleColorFlag={toggleColorFlag}/>
      <Faq
        index={index}
        setIndex={setIndex}
      />
    </ChakraProvider>
  )
}