import React from "react";
import { Link } from "react-router-dom";

import { Box, Flex, Heading } from "@chakra-ui/react";

import EditDeckButton from "./Buttons/EditDeckButton";
import DeleteDeckButton from "./Buttons/DeleteDeckButton";

// incorporate a function that checks that decks are between 40 - 80 cards

function Decks({ deck }) {
  return (
    <>
      <Flex borderWidth={1} borderRadius="xl">
        <Box p={2}>
          <EditDeckButton />
        </Box>
        <Flex alignItems="baseline">
          <Box p={2}>
            {/* instead of just linking to the page where the deckbuilder is, shouldn't we be rendering it right here?????? and passing along the deck information? */}
            <Link to={`/decks/${deck.id}/edit`}>
              <Heading size="md" p={2} _hover={{ color: "blue.400" }}>
                {/* Should I render the Deck Builder component and feed it the deck info??? */}
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
