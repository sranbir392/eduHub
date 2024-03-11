import { Box, Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import React from "react";
import Schedule from "../students/Schedule";
import SrintPlan from "../students/SrintPlan";
import Discussion from "../students/Discussion";

function DashBoard() {
  return (
    <Box >
      <Tabs variant="soft-rounded" colorScheme="green" size={{base:"sm",lg:"md"}}>
        <TabList gap={{base:3,md:6}} fontSize={{base:"12px",md:"14px"}}>
          <Tab >Schedule</Tab>
          <Tab>Sprint Plane</Tab>
          <Tab>Discussion</Tab>
        </TabList>
        <TabPanels mt={10}>
          <TabPanel>
            <Box>
              <Schedule />
            </Box>
          </TabPanel>
          <TabPanel>
            <Box>
              <SrintPlan />
            </Box>
          </TabPanel>
          <TabPanel>
            <Box>
              <Discussion />
            </Box>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
}

export default DashBoard;
