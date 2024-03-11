import { Flex, Text } from '@chakra-ui/react'
import React from 'react'

function Notification() {
  return (
    <Flex justifyContent={"center"} mt={10}>
      <Text fontSize={20} fontWeight={600}>No New Notification Right Now!</Text>
    </Flex>
  )
}

export default Notification
