import { Box, Flex, Text } from '@chakra-ui/react';
import React from 'react'
 import YouTube from 'react-youtube'
function Lecture() {
    const opts = {
        height: '300',
        width: '300',
        playerVars: {
          autoplay: 0,
        },
      };
      
  return (
    <Flex justifyContent={"center"} mt={10}>
      <Box>
      
        <YouTube videoId="HcOc7P5BMi4" opts={opts}  />
      </Box>
      </Flex>
  )
}

export default Lecture
