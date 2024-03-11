import {
  Avatar,
  Box,
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Stack,
  Text,
  useToast,
} from "@chakra-ui/react";
import React, { useContext, useEffect, useState } from "react";
import MenuItems from "./MenuItems";
import { useNavigate } from "react-router-dom";


function ManuLinks({ isOpen }) {
  

  const toast = useToast();
  const navigate = useNavigate();
  const [render, setRender] = useState(1);
  const users=true
  const HandleSignup = () => {
   
    navigate("/login");
  };

  const handleHome = () => {
    navigate("/");
  };
  const handleLogOut = () => {
    toast({
      title: "logout successfull ",
      status: "error",
      duration: 3000,
      isClosable: true,
    });
    
  };
 
  
  return (
    <Box
      display={{ base: isOpen ? "block" : "none", md: "block" }}
      flexBasis={{ base: "100%", md: "auto" }}
    >
      <Stack
        spacing={8}
        align="center"
        justify={["center", "space-between", "flex-end", "flex-end"]}
        direction={["column", "row", "row", "row"]}
        pt={[4, 4, 0, 0]}
      >
        <Text
          display="block"
          fontSize={18}
          fontWeight={500}
          _hover={{ color: "red.300" }}
          onClick={handleHome}
          cursor={"pointer"}
        >
          Home
        </Text>
        <MenuItems>Service</MenuItems>
        <MenuItems>Contact us</MenuItems>
        <MenuItems>About us</MenuItems>
        {users ? (
          <Menu placement="bottom">
            <MenuButton>
              <Avatar
                name="Sasuke Uchiha"
                src="https://bit.ly/broken-link"
                size="sm"
                mt="-1"
                p="0"
              />
            </MenuButton>
            <MenuList
              textAlign="center"
              alignItems="center"
              width="20px"
              mt="15px"
              mr="20px"
            >
              <MenuItem textAlign="center" alignItems="center" display="flex">
                <Button
                 
                  colorScheme="linkedin"
                  _hover={{ bg: "blue.100" }}
                  variant="outline"
                  m="auto"
                  textTransform="uppercase"
                  fontWeight="extrabold"
                  borderWidth="1px"
                  borderColor="slate.500"
                  rounded="md"
                  p="2"
                  width="full"
                >
                  Profile
                </Button>
              </MenuItem>
              <MenuItem textAlign="center" alignItems="center" display="flex">
                <Button
                  colorScheme="red"
                  m="auto"
                  textTransform="uppercase"
                  fontWeight="extrabold"
                  borderWidth="1px"
                  borderColor="slate.500"
                  rounded="md"
                  p="2"
                  width="full"
                  onClick={handleLogOut}
                >
                  Log out
                </Button>
              </MenuItem>
            </MenuList>
          </Menu>
        ) : (
          <Button
            color="red"
            colorScheme="red"
            borderColor="red"
            variant="outline"
            mb="2"
            onClick={HandleSignup}
          >
            SIGNIN
          </Button>
        )}
      </Stack>
    </Box>
  );
}

export default ManuLinks;
