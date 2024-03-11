import { Flex } from "@chakra-ui/react";
import React from "react";

function NavBarContainer({ children }) {
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      w={{ base: "100%", xl: "95%" }}
      p={18}
      bg={["primary.500", "primary.500", "transparent", "transparent"]}
      color={["white", "white", "primary.700", "primary.700"]}
    >
      {children}
    </Flex>
  );
}

export default NavBarContainer;
