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
        <Flex p={1} alignItems='baseline'>
          <Link to={`/decks/${deck.id}/edit`}>
            <Heading size="md" p={2} _hover={{ color: "blue.400" }}>
              {deck.deckName}
            </Heading>
          </Link>
          {/* Fix this box's spacing and text appearance */}
          <Box p={2} fontSize="xs" fontWeight='semibold' letterSpacing='wide' fontStyle='italic'>
            {deck.cards?.length} cards
          </Box>
        </Flex>
        <Box p={2} mr={0} ml="auto">
          <DeleteDeckButton />
        </Box>
      </Flex>
    </>
  );
}

export default Decks;
