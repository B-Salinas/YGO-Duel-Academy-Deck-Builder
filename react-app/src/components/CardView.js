import React from 'react';
import { useSelector } from 'react-redux';
import {
    Box,
    Grid,
    GridItem,
    HStack,
    Image
} from "@chakra-ui/react";

export default function CardView() {
    
    const current_trunk_card = useSelector((state) => state.deckbuilder.current_trunk_card)
    const current_deck = useSelector((state) => state.deckbuilder.current_deck)

    return current_trunk_card && (
        <>
            <Box>
                <Grid templateColumns="repeat(9, 1fr)" gap={2} h={40}> 
                    <GridItem colStart={2} colEnd={4} bg={"red.100"}>
                        <Image src={current_trunk_card.img_url} alt="card image" />
                    </GridItem>

                    <GridItem colStart={4} colEnd={9} bg="blue.100" >
                        <Grid templateRows="repeat(3, 1fr)" templateColumns="repeat(5, 1fr)" gap={4}>
                            <GridItem ml={5} h={10} colStart={1} colEnd={6} bg="orange.100"> 
                                <HStack>
                                    <Box>
                                        {current_trunk_card.card_id}
                                    </Box>
                                    <Box>
                                        if ({current_trunk_card.card_id}):
                                            {current_trunk_card.card_id}
                                    </Box>
                                </HStack>
                            </GridItem>
                            <GridItem ml={5} colStart={1} colEnd={6} bg="orange.100">
                                <Box> {current_trunk_card.name} </Box>
                            </GridItem>
                            <GridItem ml={5} colStart={1} colEnd={6} bg="orange.100"> 
                                <HStack>
                                    <Box>
                                        {Object.keys(current_deck.deck_cards).length}
                                    </Box>
                                    <Box>
                                        {current_trunk_card.type}
                                        {current_trunk_card.race}
                                        {current_trunk_card.attribute}
                                    </Box>
                                    <Box>
                                        {current_trunk_card.atk}
                                        {current_trunk_card.def}
                                    </Box>
                                </HStack>
                            </GridItem>

                        </Grid>
                    </GridItem> 
                </Grid>
            </Box>
        </>
    )
}

