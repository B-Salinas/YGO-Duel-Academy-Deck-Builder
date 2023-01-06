import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useParams } from "react-router-dom";

import {
  Box,
  Button,
  Container,
  Divider,
  Flex,
  Grid,
  GridItem,
  Heading,
  HStack,
  SimpleGrid,
} from "@chakra-ui/react";

import { getUserDeckCards, getAllCards } from "../store/session";

import NavBar from "./NavBar";
import DB_Header from "./DB_Header";
import DB_Filter from "./DB_Filter";
import DB_Trunk from "./DB_Trunk";
import DB_CurrentDeck from "./DB_CurrentDeck";
import DB_CardView from "./DB_CardView";

function DB() {
  const dispatch = useDispatch();
  const { deckId } = useParams();
  const deck = useSelector((state) => state.session.user?.deck?.find((deck) => deck.id === deckId));
  const allUserCards = useSelector((state) => state.session.user?.cards);

  useEffect(() => {
    if (!allUserCards) {
      dispatch(getUserDeckCards(deckId));
      dispatch(getAllCards());
    }
  }, [allUserCards]);

  return (
    <>
      <Grid templateColumns="repeat(12, 1fr)" gap={2}>
        <GridItem colSpan={12}>
          <Box>
            {/* I need to make this component dynamic, because it's not at the moment */}
            <NavBar />
          </Box>
        </GridItem>
        <GridItem colSpan={12}>
          <Box>
            <DB_Header currentDeck={deck} />
          </Box>
        </GridItem>
        <GridItem colSpan={12}>
          <Box>
            <DB_Filter currentDeck={deck} />
          </Box>
        </GridItem>
        <GridItem h="20" />
        <GridItem colSpan={5} bg="red.100">
          {allUserCards && (
            <Box maxH="xl" borderWidth="2px" borderRadius="xl">
              <DB_Trunk userCards={allUserCards} />
            </Box>
          )}
        </GridItem>
        <GridItem colSpan={5} bg="gray.100">
          <Box maxH="xl" borderWidth="2px" borderRadius="xl">
            Current Deck will go here
          </Box>
        </GridItem>
        <GridItem h="20" />
        <GridItem h="20" />
        <GridItem colSpan={10}>
          <Box borderWidth="2px" borderRadius="xl">
            Card View will go here
          </Box>
        </GridItem>
        <GridItem h="20" />
      </Grid>
    </>
  );
}

export default DB;

{
  /* 
<Box align={"center"} justify={"center"} direction={"row"} mt={8}>
  <Grid templateColumns="repeat(3, 1fr)" gap={6} justify="center">
    <Flex align="left" ml={10}>
      <NavLink to="/decklist" exact={true} activeClassName="active">
        <Button
          bg="gray.400"
          color={"white"}
          letterSpacing="widest"
          _hover={{ bg: "gray.800", color: "white" }}
        >
          {" "}
          BACK TO DECK LIST{" "}
        </Button>
      </NavLink>
    </Flex>
    <Box align="center">
      <Heading>DECK BUILDER</Heading>
    </Box>
    <Flex align="right" ml={300}>
      <Button
        bg="green.400"
        color={"white"}
        letterSpacing="widest"
        _hover={{ bg: "green.800", color: "white" }}
      >
        {" "}
        SAVE DECK{" "}
      </Button>
    </Flex>
  </Grid>
</Box>

<br />

<Box>
  <DeckNav deck={deck} />
</Box>

<br />

<HStack>
  <Box w={"50%"}>
    < DB_Trunk />
    something in here
  </Box>
  <Box w={"50%"}>
    <DB_CurrentDeck />
    spmething else in here
  </Box>
</HStack>

<br />

<Box> 
  <DB_CardView /> 
</Box> 
  
*/
}
