import React from "react";
import { useSelector } from "react-redux";

import { Box, Flex, Grid, GridItem, Heading } from "@chakra-ui/react";

import DB_Filter from "./DB_Filter";

function DB_Header({ currentDeck }) {
  const user = useSelector((state) => state.session?.user);

  // const monster_card_low_levels = () => {
  //     const user_monster_cards = user.monster_cards
  //     const low_level = user_monster_cards.query.filter(user_monster_cards.level == Range(1,5))
  //     return low_level
  // }

  return (
    //   user &&
    //   currentDeck && (
    <>
      <Box>
        <Grid templateColumns="repeat(12, 1fr)" gap={2}>
          <GridItem h="20" />
          <GridItem colSpan={2}>
            <Box align="center">
              <Heading> Trunk </Heading>
            </Box>
          </GridItem>
          <GridItem colSpan={6}>
            <Flex p={4} justify="space-evenly">
              <Box align="center" borderWidth="2px" borderRadius="xl">
                <Box> Main </Box>
                <Box> # of Main Cards </Box>
              </Box>
              <Box align="center" borderWidth="2px" borderRadius="xl">
                <Box> Side </Box>
                <Box> # of Side Cards </Box>
              </Box>
              <Box align="center" borderWidth="2px" borderRadius="xl">
                <Box> Fusion </Box>
                <Box> # of Fusion Cards </Box>
              </Box>
            </Flex>
          </GridItem>
          <GridItem colSpan={2}>
            <Box align="center">
              <Heading> Deck Name </Heading>
            </Box>
          </GridItem>
          <GridItem w="100%" />
        </Grid>
      </Box>
    </>
  );
}

export default DB_Header;

{
  /* 
  
<Box>
  <Grid templateColumns="repeat(3, 1fr)" gap={6}>
    <Box align="center">
      <Heading> Trunk </Heading>
    </Box>
    <Grid templateColumns="repeat(3, 1fr)" gap={6} align="center">
      <Text> Main </Text>
      <Text> Fusion </Text>
      <Text> Side </Text>
    </Grid>
    <Box align="center">
      <Heading color="red.400">{currentDeck?.deckName}</Heading>
    </Box>
  </Grid>

*/
}
