import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Flex, Box, Grid, Button, Heading, HStack } from "@chakra-ui/react";
import { NavLink, useParams } from "react-router-dom";
import DeckNav from "./DeckNav";
import Trunk from "./Trunk";
import Deck from "./Deck";
import CardView from "./CardView";
import { getUserDeckCards, getAllCards } from "../store/session";

export default function DeckBuilder() {
  const dispatch = useDispatch();
  const { deckId } = useParams();
  const deck = useSelector(state => state.session.user.decks.find(deck => deck.id === deckId));
  const allUserCards = useSelector(state => state.session.user?.cards);

  useEffect(() => {
    if (!allUserCards) {
      dispatch(getUserDeckCards(deckId));
      dispatch(getAllCards());
    }
  }, [allUserCards]);

  return (
    <>
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
        <DeckNav />
      </Box>

      <br />

      <HStack>
        <Box w={"50%"}>
          {/* <Trunk /> */}
          something in here
        </Box>
        <Box w={"50%"}>
          {/* <Deck /> */}
          spmething else in here
        </Box>
      </HStack>

      <br />

      <Box>{/* <CardView /> */}</Box>
    </>
  );
}
