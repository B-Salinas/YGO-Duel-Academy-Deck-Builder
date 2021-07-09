import React, { useState } from 'react';
import {
    Box,
    Grid,
    GridItem,
    Button
} from "@chakra-ui/react";
import { useSelector } from 'react-redux';
export default function Trunk() {
    
    const user = useSelector((state) => state.session.user)
    const current_trunk_card = useSelector((state) => state.deckbuilder.current_trunk_card)
    const [ trunkCard, setTrunkCard ] = useState()

    // I want to be able to click on a card and have that render within the CardView Component 

    return user && (
        <>
            <Box pl={30} pr={30}>
                <Grid templateRows="repeat(5, 1fr)" templateColumns="repeat(5, 1fr)" gap={4} h={"400px"} bg="green.100">
                    {Object.values(user.trunk_cards).map((card, idx) => (
                        <GridItem key={idx} rowSpan={1} colSpan={3}> {card.name} </GridItem>
                    ))}
                </Grid>
            </Box>
        </>
    )
}