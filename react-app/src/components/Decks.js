import React from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";

import { Box, Flex, Heading } from "@chakra-ui/react";

import EditDeckButton from "./Buttons/EditDeckButton";
import DeleteDeckButton from "./Buttons/DeleteDeckButton";
import { getUserDeckCards } from "../store/session";

// incorporate a function that checks that decks are between 40 - 80 cards

function Decks({ deck }) {
  const history = useHistory();
  const dispatch = useDispatch();

  const handleNavigate = () => {
    dispatch(getUserDeckCards(deck.id));
    history.push(`/decks/${deck.id}/edit`);
  };

  return (
    <>
      <Flex borderWidth={1} borderRadius="xl">
        <Box p={2}>
          <EditDeckButton />
        </Box>
        <Flex alignItems="baseline">
          <Box p={2}>
            <Link onClick={handleNavigate}>
              <Heading size="md" p={2} _hover={{ color: "blue.400" }}>
                {deck.deckName}
              </Heading>
            </Link>
          </Box>
          {/* Fix this box's spacing and text appearance */}
          <Box
            fontSize="xs"
            fontWeight="semibold"
            letterSpacing="wide"
            fontStyle="italic"
          >
            {deck.numCards} cards
          </Box>
        </Flex>
        <Box p={2} mr={0} ml="auto">
          {/* I need to add an additional delete confirmation window about deleting a deck */}
          <DeleteDeckButton deckId={deck.id} />
        </Box>
      </Flex>
    </>
  );
}

export default Decks;
