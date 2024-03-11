import { Flex, HStack, Spacer, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getassignmentData } from "../redux/action";

function Profile() {
 
  const dispatch=useDispatch();
  const [obj, setObj] = useState({});
  const data = useSelector((pre) => pre.reducer);
  useEffect(() => {
    dispatch(getassignmentData());
  }, []);
  useEffect(()=>{
  setObj(data.signupData)
  },[data])
  console.log(data)
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2  p-4 gap-4 mt-5 " style={{color:"black"}}>
      <div className="bg-gray-50 p-7 rounded-xl">
        <HStack>
          <p>Name</p>
          <Spacer />
          <p className="text-blue-600 font-semibold">EDIT</p>
        </HStack>
        <Text fontSize={18} fontWeight={500}>
          {obj.name}
        </Text>
      </div>
      <div className="bg-gray-50 p-7 rounded-xl">
        <HStack>
          <p>Password</p>
          <Spacer />
          <p className="text-blue-600 font-semibold">EDIT</p>
        </HStack>
        <Text fontSize={18} fontWeight={500}>
          {obj.password}
        </Text>
      </div>
      <div className="bg-gray-50 p-7 rounded-xl">
        <HStack>
          <p>Phone</p>
          <Spacer />
          <p className="text-blue-600 font-semibold">EDIT</p>
        </HStack>
        <Text fontSize={18} fontWeight={500}>
          {"9876543210"}
        </Text>
      </div>
      <div className="bg-gray-50 p-7 rounded-xl">
        <HStack>
          <p>Email</p>
          <Spacer />
          <p className="text-blue-600 font-semibold">EDIT</p>
        </HStack>
        <Text fontSize={18} fontWeight={500}>
          {obj.email}
        </Text>
      </div>
    </div>
  );
}

export default Profile;
