import React from "react";

import { Box, Grid, GridItem, Heading } from "@chakra-ui/react";

import BackToMainMenu from "./Buttons/BackToMainMenuButton";
import CreateNewDeck from "./Buttons/CreateNewDeckButton";

const NavBar = (Component, section) => {
  return (
    <>
      <Box bg="gray.100">
        <Grid templateColumns="repeat(12, 1fr)" gap={2}>
          <GridItem w="100%" h="20" />
          <GridItem colSpan={2}>
            <Box p={4} ml={6}>
              <BackToMainMenu />
            </Box>
          </GridItem>
          <GridItem colSpan={2} />
          <GridItem colSpan={2}>
            {/* This will be dynamic and reusable throughout our app  */}
            <Box align="center" mt={4}>
              {/* This will be a dynamic SECTION that is passed in depending on the page! */}
              <Heading>DECK LIST</Heading>
            </Box>
          </GridItem>
          <GridItem colSpan={2} />
          <GridItem colSpan={2}>
            {/* This button isn't connected to the modal that creates the new deck!! */}
            <Box p={4} ml={2}>
              {/* This will be a dynamic COMPONENT that is passed in depending on the page! */}
              <CreateNewDeck />
            </Box>
          </GridItem>
          <GridItem w="100%" h="20" />
        </Grid>
      </Box>
    </>
  );
};

export default NavBar;
