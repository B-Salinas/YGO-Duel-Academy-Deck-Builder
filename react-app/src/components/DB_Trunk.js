import React, { useEffect, useState } from "react";
import {
  Box,
  Grid,
  GridItem,
  Button,
  Heading,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import { useSelector, useDispatch } from "react-redux";

import DB_Trunk_Cards from "./DB_Trunk_Cards";

import { FaTrash as DeleteIcon } from "react-icons/fa";

function DB_Trunk({ userCards }) {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.session.user);
  const [trunkCard, setTrunkCard] = useState();

  console.log(userCards);

  // I want to be able to click on a card and have that render within the CardView Component

  const handleDeleteDeck = () => {
    console.log("deleting deck...");
  };

  return (
    <>
      <Box>
        <Wrap>
          {userCards.map((cardData) => {
            const card = cardData.card;

            return (
              <WrapItem key={cardData.id}>
                <Box>{card.name}</Box>
              </WrapItem>
            );
          })}
        </Wrap>
      </Box>
    </>
  );
}

export default DB_Trunk;

{
  /* <Box>
          <Wrap>
            { user_trunk_cards && (
              <>
                {user_trunk_cards.forEach((trunk_card) => {
                  return (
                    <WrapItem>
                      <DB_Trunk_Cards trunk_card={trunk_card} />
                    </WrapItem>
                  );
                })}
              </>
            )}
          </Wrap>
        </Box> */
}

{
  /* <Box pl={30} pr={30}>
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
</Box>; */
}
