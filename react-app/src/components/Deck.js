import React from 'react';
import {
    Flex,
    Text,
    Box,
    Grid,
    GridItem,
    Button,
    Heading
} from "@chakra-ui/react";
export default function Deck() {
    return (
        <>
            <Box pl={30} pr={30}>
                <Grid templateRows="repeat(5, 1fr)" templateColumns="repeat(5, 1fr)" gap={4} h={"400px"} bg="green.100">
                    {/* This is where I will map over all of the cards, so I would generate the grid items ... is there a way to do overview scroll/hide? */}

                    <GridItem rowSpan={1} colSpan={5} bg="blue.100"> Red-Eyes B. Dragon </GridItem>
                    <GridItem rowSpan={1} colSpan={5}> Black Pendant </GridItem>
                    <GridItem rowSpan={1} colSpan={5}> Sparks </GridItem>
                    <GridItem rowSpan={1} colSpan={5}> Magician of Faith </GridItem>
                    <GridItem rowSpan={1} colSpan={5}> Man-Eater Bug </GridItem>
                </Grid>
            </Box>
        </>
    )
}