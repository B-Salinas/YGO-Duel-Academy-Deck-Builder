import React from "react";
import { Box, Grid, GridItem } from "@chakra-ui/react";
import { useSelector } from "react-redux";

function DB_CurrentDeck() {
  const user = useSelector((state) => state.session.user);
  const current_deck = useSelector((state) => state.deckbuilder.current_deck);

  return (
    user &&
    current_deck && (
      <>
        <Box pl={30} pr={30}>
          <Grid
            borderWidth="1px"
            borderRadius="sm"
            templateRows="repeat(5, 1fr)"
            templateColumns="repeat(5, 1fr)"
            gap={4}
            h={"400px"}
          >
            {Object.values(current_deck.deck_cards).map((card, idx) => (
              <GridItem key={idx} rowSpan={1} colSpan={5} bg="blue.100">
                {" "}
                {card.name}{" "}
              </GridItem>
            ))}
          </Grid>
        </Box>
      </>
    )
  );
}

export default DB_CurrentDeck;
