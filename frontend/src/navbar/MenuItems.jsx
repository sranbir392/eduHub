import { Text, useToast } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

function MenuItems({ children }) {
  const toast = useToast();
  const handleAccount = () => {
    toast({
      status: "info",
      title: "Feature Coming out soon",
      duration: 3000,
    });
  };
  return (
    <Link>
      <Text
        display="block"
        fontSize={18}
        fontWeight={500}
        _hover={{ color: "red.300" }}
        onClick={handleAccount}
      >
        {children}
      </Text>
    </Link>
  );
}
export default MenuItems;
