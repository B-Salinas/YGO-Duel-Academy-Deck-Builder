import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, Link, useParams } from "react-router-dom";

import {
  Box,
  Container,
  Divider,
  Grid,
  GridItem,
  Heading,
  SimpleGrid,
} from "@chakra-ui/react";

import { FaTrash as DeleteIcon } from "react-icons/fa";

import { MainModal } from "../modal/Modal";
import { deleteUserDeck } from "../store/session";

import NavBar from "./NavBar";
import Decks from "./Decks";

function DeckList() {
  const dispatch = useDispatch();

  const user = useSelector((state) => state?.session?.user);
  const user_decks = useSelector((state) => state?.session?.user?.decks);

  const [deckId, setDeckId] = useState(0);

  const handleDeleteDeck = async (deckId) => {
    dispatch(deleteUserDeck(deckId));
    console.log("DECK_ID", deckId);
    console.log("DISPATCHED");
  };

  return (
    user && (
      <>
        <Grid templateColumns="repeat(12, 1fr)" gap={2}>
          <GridItem colSpan={12}>
            <Box>
              <NavBar />
            </Box>
          </GridItem>
          <GridItem colSpan={2} h="20" />
          <GridItem colSpan={8}>
            <Container maxW="container.lg">
              <Box>
                <Heading size="lg" p={4}>
                  {user_decks?.length}/9 Decks
                </Heading>
              </Box>
              <Divider />
              <SimpleGrid>
                {user_decks?.length > 0 &&
                  user_decks?.map((deck, idx) => (
                    <Box p={4}>
                      <Decks deck={deck} />
                    </Box>
                  ))}
              </SimpleGrid>
            </Container>
          </GridItem>
          <GridItem colSpan={2} />
        </Grid>
      </>
    )
  );
}

export default DeckList;

{
  /* 
<Box align={"center"} justify={"center"} direction={"row"} mt={8}>
  <Grid templateColumns="repeat(3, 1fr)" gap={6} justify="center">
    <Flex align="left" ml={10}>
      <NavLink to="/mainmenu" exact={true} activeClassName="active">
        <Button bg="gray.400" color={"white"} letterSpacing="widest"
          _hover={{ bg: "gray.800", color: "white" }} >
            BACK TO MENU
        </Button>
      </NavLink>
    </Flex>
    <Box align="center">
      <Heading> 
        DECK LIST
      </Heading>
    </Box>
    <Flex align="right" ml={450}>
      <MainModal />
    </Flex>
  </Grid>
</Box>

<br />
<br />

<Box pl={100} pr={100}>
  <Grid templateRows="repeat(5, 1fr)" templateColumns="repeat(5, 1fr)" gap={4} h={"400px"} ml={10} mr={10}>
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
*/
}
