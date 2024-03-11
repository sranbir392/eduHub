import { Box, Text } from "@chakra-ui/react";
import React from "react";

function Logo() {
  return (
    <Box>
      <Text fontSize="2xl" fontWeight="bold" ml={{ lg: "20px" }}>
        <span style={{ color: "#23a056" }}>Edu</span>
        <span style={{ color: "#7b56fb" }}>Hub</span>
      </Text>
    </Box>
  );
}

export default Logo;
