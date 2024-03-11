import React, { useContext, useEffect, useState } from "react";
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
  Text,
  useToast,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { DeleteassignmentData, PostassignmentData, getassignmentData } from "../redux/action";
import { AuthContextData } from "../authProvider/AuthContainer";

function Assignment() {
  const toast = useToast();
  const dispatch = useDispatch();
  const [clickedIndex, setClickedIndex] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false); // State to track submission status
  const [array, setArray] = useState([]);
  const [state, setState] = useState(false);
  const data = useSelector((pre) => pre.reducer);
  const { obj } = useContext(AuthContextData);
  const [details, setDetails] = useState({
    title: "",
    date: "",
    creater: "",
  });
  useEffect(() => {
    dispatch(getassignmentData());
  }, []);
  useEffect(() => {
    setArray(data.assignment);
  }, [data]);
  const handleAccount = (idx) => {
    setClickedIndex(idx);
    setIsSubmitted(false);
  };

  const handleSumit = () => {
    if (details.title && details.date && details.creater) {
      dispatch(PostassignmentData(details)).then(() =>
        dispatch(getassignmentData())
      );
      setState(false);
    } else {
      console.log("fill");
    }
  };
  const handleSubmit = (e) => {
    setIsSubmitted(true);
    toast({
      status: "info",
      title: "Link submitted successfully",
      duration: 3000,
    });
  };
  const handleDelete=(el)=>{
    dispatch(DeleteassignmentData(el.title)).then(()=>dispatch(getassignmentData()))
  }
  return (
    <Box p={1} >
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
                Create Assignments
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
      {array?.map((el, index) => (
        <Box key={index} cursor={"pointer"} w={"100%"}>
          
            {obj === "admin" ? (
              <Grid
                templateColumns={{base:"repeat(3,1fr)",lg:"repeat(5, 1fr)"}}
                alignItems={"center"}
                my={3}
                onClick={handleAccount}
                // border={"2px solid"}
                gap={3}
                pr={{base:3,lg:10}}
                // justifyContent={"space-between"}
                
              >
                <GridItem colSpan={2}   onClick={(e) => handleAccount(index)}>
                <Flex justifyContent={{base:"space-between" ,md:"start"}} gap={2} alignItems={"center"} >
                <Image
                  src="https://students.masaischool.com/static/media/announcement-icon.4bf714660cdb7ecf44113ffbd0017f0c.svg"
                  alt="logo"
                />
                  <Text fontSize={{base:"12px",md:"14px",lg:"18px"}} fontWeight={600}>
                    {el.title}
                  </Text>
                </Flex>
                </GridItem>
                <GridItem display={{base:"none",lg:"grid"}}  onClick={(e) => handleAccount(index)}>
                  <Flex  alignItems="center" gap={2}>
                    <Avatar name={el.creater} size="sm" />
                    <Text >{el.creater}</Text>
                  </Flex>
                </GridItem>
                <GridItem display={{base:"none",lg:"grid"}}  onClick={(e) => handleAccount(index)}>
                  <Flex display={{base:"none",lg:"flex"}} alignItems="center" gap={2}>
                    <CalendarIcon />
                    <Text >Submitted on: {el.date}</Text>
                  </Flex>
                </GridItem>
                <GridItem   onClick={(e)=>handleDelete(el)}>
                <Flex justifyContent={"end"} gap={2} mr={2} > 
                  <DeleteIcon />
                </Flex>
              </GridItem>
                {!isSubmitted && clickedIndex === index && (
                  <GridItem  my={10}>
                    <input
                      type="text"
                      placeholder="Submit the github link"
                      className="block border border-grey-light w-full p-3 rounded mb-4"
                    />
                    <Button
                      bg={"blue"}
                      color={"black"}
                      onClick={(e) => handleSubmit()}
                    >
                      Submit Link
                    </Button>
                  </GridItem>
                  
                )}
              </Grid>
            ) : (
              <Grid
              templateColumns={{base:"repeat(3,1fr)",lg:"repeat(4, 1fr)"}}

                alignItems={"center"}
                my={3}
                onClick={handleAccount}
              >
                <GridItem colSpan={2} onClick={(e) => handleAccount(index)}>
                <Flex justifyContent={{base:"space-between" ,md:"start"}} gap={2} alignItems={"center"} >
                <Image
                  src="https://students.masaischool.com/static/media/announcement-icon.4bf714660cdb7ecf44113ffbd0017f0c.svg"
                  alt="logo"
                />
                  <Text fontSize={{base:"12px",md:"14px",lg:"18px"}} fontWeight={600}>
                    {el.title}
                  </Text>
                  </Flex>
                </GridItem>
                <GridItem display={{base:"none",lg:"grid"}} onClick={(e) => handleAccount(index)}>
                  <Flex alignItems="center" gap={2}>
                    <Avatar name={el.creater} size="sm" />
                    <Text fontSize={18}>{el.creater}</Text>
                  </Flex>
                </GridItem>
                <GridItem display={{base:"none",lg:"grid"} } colSpan={1} onClick={(e) => handleAccount(index)}>
                  <Flex alignItems="center" gap={2}>
                    <CalendarIcon />
                    <Text fontSize={18}>Submitted on: {el.date}</Text>
                  </Flex>
                </GridItem>
                {!isSubmitted && clickedIndex === index && (
                  <GridItem  my={10}>
                    <input
                      type="text"
                      placeholder="Submit the github link"
                      className="block border border-grey-light w-full p-3 rounded mb-4"
                    />
                    <Button
                      bg={"blue"}
                      color={"black"}
                      onClick={(e) => handleSubmit()}
                    >
                      Submit Link
                    </Button>
                  </GridItem>
                )}
              </Grid>
            )}
         
          <hr />
        </Box>
      ))}
    </Box>
  );
}

export default Assignment;
