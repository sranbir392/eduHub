import { CalendarIcon, DeleteIcon } from "@chakra-ui/icons";
import {
  Avatar,
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  HStack,
  Image,
  Stack,
  Text,
  useToast,
} from "@chakra-ui/react";
import React, { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DeletescheduleData, GetscheduleData, PostscheduleData } from "../redux/action";
import { AuthContextData } from "../authProvider/AuthContainer";

function Schedule() {
  const toast = useToast();
  const data = useSelector((pre) => pre.reducer);
  console.log(data);
  const { obj } = useContext(AuthContextData);
  const [details, setDetails] = useState({
    title: "",
    date: "",
    creater: "",
  });
  const [state, setState] = useState(false);
  const dispatch = useDispatch();
  const [array, setArray] = useState([]);
  useEffect(() => {
    dispatch(GetscheduleData());
  }, []);

  useEffect(() => {
    setArray(data.schedule);
  }, [data]);

  const handleAccount = () => {
    toast({
      status: "info",
      title: "link update soon",
      duration: 3000,
    });
  };
  const handleSumit = () => {
    if (details.title && details.date && details.creater) {
      dispatch(PostscheduleData(details)).then(()=>dispatch(GetscheduleData()))
      setState(false);
    } else {
      console.log("fill");
    }
  };

  const handleDelete=(el)=>{
    dispatch(DeletescheduleData(el.title)).then(()=>dispatch(GetscheduleData()))
  }

  return (
    <Box>
      <Box>
        {obj == "admin" && (
          <Box mb={10}>
            <HStack>
              <Button
                colorScheme="blue"
                width="full"
                p={3}
                onClick={(e) => setState((pre) => !pre)}
              >
                Create Course Time
              </Button>
            </HStack>
          </Box>
        )}

        {state && (
          <>
            <div className="bg-grey-lighter min-h-screen flex flex-col mt-10">
              <div className="container mt-0 max-w-lg  mx-auto flex-1 flex flex-col items-center px-2">
                <div className="bg-white p-10 rounded shadow-md text-black w-full">
                  <h1 className="mb-8 mt-0  text-3xl text-center">
                    Create Course
                  </h1>
                  <input
                    type="text"
                    className="block border border-grey-light w-full p-3 rounded mb-4"
                    name="title"
                    placeholder="Topic Name"
                    onChange={(e) =>
                      setDetails({
                        ...details,
                        [e.target.name]: e.target.value,
                      })
                    }
                  />

                  <input
                    type="date"
                    className="block border border-grey-light w-full p-3 rounded mb-4"
                    name="date"
                    placeholder="Duration"
                    onChange={(e) =>
                      setDetails({
                        ...details,
                        [e.target.name]: e.target.value,
                      })
                    }
                  />
                  <input
                    type="text"
                    className="block border border-grey-light w-full p-3 rounded mb-4"
                    name="creater"
                    placeholder="creater"
                    onChange={(e) =>
                      setDetails({
                        ...details,
                        [e.target.name]: e.target.value,
                      })
                    }
                  />

                  <Button
                    bg={"red"}
                    type="submit"
                    className="w-full  text-center py-3 rounded bg-green text-red-500 hover:bg-green-dark focus:outline-none my-1"
                    onClick={handleSumit}
                  >
                    Create 
                  </Button>
                </div>
              </div>
            </div>
          </>
        )}
      </Box>
      {array?.map((el) => {
        return (
          <Box>
            {obj === "admin" ? (
  <Grid
    templateColumns={{base:"repeat(3,1fr)",lg:"repeat(10, 1fr)"}}
    alignItems={"center"}
    my={5}
    cursor={"pointer"}
  >
   <GridItem colSpan={{base:2,lg:4}} onClick={handleAccount}>
   <Flex justifyContent={{base:"space-between" ,lg:"start"}} gap={{base:2,lg:5}} alignItems={"center"} >
                <Image
                  src="https://students.masaischool.com/static/media/announcement-icon.4bf714660cdb7ecf44113ffbd0017f0c.svg"
                  alt="logo"
                />
                  <Text fontSize={{base:"12px",md:"14px",lg:"18px"}} fontWeight={600}>
                    {el.title}
                  </Text>
                </Flex>
              </GridItem>
              <GridItem display={{base:"none",lg:"grid"}} colSpan={2} onClick={handleAccount}>
                <Flex alignItems={"center"} gap={2}>
                  <Avatar name={el.creater} size="sm" />
                  <Text fontSize={18}> {el.creater}</Text>
                </Flex>
              </GridItem>
              <GridItem display={{base:"none",lg:"grid"}} colSpan={2} onClick={handleAccount}>
                <Flex alignItems={"center"} gap={2}>
                  <CalendarIcon />
                  <Text fontSize={18}> {el.date}</Text>
                </Flex>
              </GridItem>
              <GridItem  colSpan={1} onClick={(e)=>handleDelete(el)}>
                <Flex alignItems={"center"} gap={2}>
                  <DeleteIcon />
                  
                </Flex>
              </GridItem>
  </Grid>
) : (
  <Grid
    templateColumns={{base:"1fr",lg:"repeat(9, 1fr)"}}
    alignItems={"center"}
    my={5}
    onClick={handleAccount}
  >
    <GridItem colSpan={{base:1,lg:4}}>
    <Flex  gap={5} alignItems={"center"} >
                <Image
                  src="https://students.masaischool.com/static/media/announcement-icon.4bf714660cdb7ecf44113ffbd0017f0c.svg"
                  alt="logo"
                />
                  <Text fontSize={{base:"14px",md:"16px",lg:"18px"}} fontWeight={600}>
                    {el.title}
                  </Text>
                </Flex>
              </GridItem>
              <GridItem  display={{base:"none",lg:"grid"}} colSpan={2}>
                <Flex alignItems={"center"} gap={2}>
                  <Avatar name={el.creater} size="sm" />
                  <Text fontSize={18}> {el.creater}</Text>
                </Flex>
              </GridItem>
              <GridItem display={{base:"none",lg:"grid"}} colSpan={2}>
                <Flex alignItems={"center"} gap={2}>
                  <CalendarIcon />
                  <Text fontSize={18}> {el.date}</Text>
                </Flex>
              </GridItem>
  </Grid>
)}
            <hr />
          </Box>
        );
      })}
    </Box>
  );
}

export default Schedule;
