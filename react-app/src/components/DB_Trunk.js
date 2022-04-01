import React, { useEffect, useState } from "react";
import { Box, Grid, GridItem, Button, Heading } from "@chakra-ui/react";
import { useSelector, useDispatch } from "react-redux";
import { FaTrash as DeleteIcon } from "react-icons/fa";

function DB_Trunk() {
  const dispatch = useDispatch();

  const user = useSelector((state) => state.session.user);
  const current_trunk_card = useSelector(
    (state) => state?.deckbuilder?.current_trunk_card
  );

  const [trunkCard, setTrunkCard] = useState();

  // useEffect(() => {
  //     dispatch(getTrunkCard(current_trunk_card))
  // }, [current_trunk_card])

  const deck_id = useSelector((state) => state?.user?.decks?.id);

  // I want to be able to click on a card and have that render within the CardView Component

  const handleDeleteDeck = () => {
    console.log("deleting deck...");
  };

  return (
    user && (
      <>
        <Box pl={30} pr={30}>
          <Grid
            templateRows="repeat(5, 1fr)"
            templateColumns="repeat(5, 1fr)"
            gap={4}
            h={"400px"}
            overflow="scroll"
          >
            {Object.values(user.trunk_cards).map((card, idx) => (
              <>
                <GridItem
                  bg="gray.100"
                  borderWidth="1px"
                  borderRadius="sm"
                  key={idx}
                  rowSpan={1}
                  colSpan={4}
                >
                  <Heading
                    size="sm"
                    ml="10px"
                    mt="10px"
                    _hover={{ color: "blue.500" }}
                    onClick={(e) => setTrunkCard(e.target.value)}
                  >
                    {card.name}
                  </Heading>
                </GridItem>
                <GridItem rowSpan={1} colSpan={1} align="right">
                  <Button
                    align="right"
                    onClick={handleDeleteDeck}
                    _hover={{ color: "red.500" }}
                  >
                    {" "}
                    <DeleteIcon />{" "}
                  </Button>
                </GridItem>
              </>
            ))}
          </Grid>
        </Box>
      </>
    )
  );
}

export default DB_Trunk;
