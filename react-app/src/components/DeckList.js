import React, { useEffect, useState } from "react";
import { NavLink, Link, useParams } from "react-router-dom";

import {
  Box,
  Button,
  Container,
  Flex,
  Grid,
  GridItem,
  Heading,
  Spacer,
} from "@chakra-ui/react";

import { FaTrash as DeleteIcon } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";

import { MainModal } from "../modal/Modal";
import { deleteUserDeck } from "../store/session";


function DeckList() {
  const dispatch = useDispatch();

  const user = useSelector((state) => state?.session?.user);
  const user_decks = useSelector((state) => state?.session?.user?.decks);

  const [deckId, setDeckId] = useState(0);

  const handleDeleteDeck = async (deck_id) => {
    console.log("DECK_ID", deck_id);
    console.log("DISPATCHED");
  };

  return (
    user && (
      <>
        <Box align={"center"} justify={"center"} direction={"row"} mt={8}>
          <Grid templateColumns="repeat(3, 1fr)" gap={6} justify="center">
            <Flex align="left" ml={10}>
              <NavLink to="/mainmenu" exact={true} activeClassName="active">
                <Button
                  bg="gray.400"
                  color={"white"}
                  letterSpacing="widest"
                  _hover={{ bg: "gray.800", color: "white" }}
                >
                  {" "}
                  BACK TO MENU{" "}
                </Button>
              </NavLink>
            </Flex>
            <Box align="center">
              <Heading> DECK LIST</Heading>
            </Box>
            <Flex align="right" ml={450}>
              <MainModal />
            </Flex>
          </Grid>
        </Box>

        <br />
        <br />

        <Box pl={100} pr={100}>
          <Grid
            templateRows="repeat(5, 1fr)"
            templateColumns="repeat(5, 1fr)"
            gap={4}
            h={"400px"}
            ml={10}
            mr={10}
          >
            {user_decks?.map((deck, idx) => (
              <GridItem key={idx} rowSpan={1} colSpan={4}>
                <Flex>
                  <Box>
                    <Link to={`/decks/${deck.id}/edit`}>
                      <Heading size="lg" _hover={{ color: "green.400" }}>
                        {deck.deckName}
                      </Heading>
                    </Link>
                  </Box>
                  <Spacer />
                  <Box>
                    <Button
                      value={deck.id}
                      onClick={() => handleDeleteDeck(deck.id)}
                      _hover={{ color: "red.500" }}
                    >
                      {" "}
                      <DeleteIcon />{" "}
                    </Button>
                  </Box>
                </Flex>
              </GridItem>
            ))}
          </Grid>
        </Box>
      </>
    )
  );
}

export default DeckList;
