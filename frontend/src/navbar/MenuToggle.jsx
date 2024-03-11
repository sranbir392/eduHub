import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import { Box, MenuIcon } from "@chakra-ui/react";
import React from "react";

function MenuToggle({ toggle, isOpen }) {
  return (
    <Box display={{ base: "block", md: "none" }} onClick={toggle}>
      {isOpen ? <CloseIcon /> : <HamburgerIcon />}
    </Box>
  );
}

export default MenuToggle;
