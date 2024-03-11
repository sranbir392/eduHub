import { CalendarIcon } from "@chakra-ui/icons";
import {
  Avatar,
  Box,
  Flex,
  Grid,
  GridItem,
  Image,
  Text,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSprintData } from "../redux/action";

function SrintPlan() {
  const [array,setArray]=useState([])
  const dispatch=useDispatch();
  const data=useSelector((pre)=>pre.reducer)
  console.log(data)
  useEffect(()=>{
dispatch(getSprintData())
  },[])
  useEffect(()=>{
   setArray(data.sprint) 
  })
  return (
    <Box>
    {array?.map((el) => {
      return (
        <Box key={el.week}>
          <Grid templateColumns={{base:"repeat(3,1fr)",lg:"repeat(10, 1fr)"}} alignItems="center" my={5}>
            <GridItem colSpan={1}>
              <Text color={'blue.500'} fontSize={{base:"12px",md:"14px",lg:"18px"}} fontWeight={600}>
            Week: {el.week}
              </Text>
            </GridItem>
            <GridItem colSpan={{base:2,lg:8}}>
              <Grid display={{base:"none",lg:"grid"}} templateColumns="repeat(3, 1fr)" gap={10}>
              {el.topics.map((topic, index) => (
                <GridItem key={index}>
                  <Text fontSize={{base:"12px",md:"14px",lg:"18px"}}>{topic}</Text>
                </GridItem>
              ))}
              </Grid>
              <Grid display={{base:"grid",lg:"none"}} gap={10} >
                <GridItem  >
                  <Text fontSize={{base:"12px",md:"14px",lg:"18px"}} w={"100%"}>{el.topics[0]}</Text>
                </GridItem>
              
              </Grid>
            </GridItem>
          </Grid>
          <hr />
        </Box>
      );
    })}
  </Box>
  );
}

export default SrintPlan;
