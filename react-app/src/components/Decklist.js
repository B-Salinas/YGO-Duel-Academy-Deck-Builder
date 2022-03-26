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
import { NavLink } from 'react-router-dom';


export default function DeckList() {
    return (
        <>
            <Box align={"center"} justify={"center"} direction={'row'} mt={8}>
                <Grid templateColumns="repeat(3, 1fr)" gap={6} justify="center">
                    <Flex align="left" ml={10}>
                        <NavLink to="/deckbuilder" exact={true} activeClassName="active">
                            <Button bg='gray.400' color={"black"} letterSpacing='widest' _hover={{ bg: "gray.800", color: "white" }} color='white' > BACK TO DECK BUILDER </Button>
                        </NavLink>
                    </Flex>
                    <Box align="center">
                        <Heading>
                            DECK NAME GOES HERE
                        </Heading>
                    </Box>
                    <Flex align="right" ml={300}>
                        <NavLink to="/decklist" exact={true} activeClassName="active">
                            <Button bg='gray.400' color={"black"} letterSpacing='widest' _hover={{ bg: "gray.800", color: "white" }} color='white' > DELETE </Button>
                        </NavLink>
                    </Flex>
                </Grid>
            </Box>

            <br />
            <br />


            <Box pl={30} pr={30}>
                <Grid templateRows="repeat(5, 1fr)" templateColumns="repeat(5, 1fr)" gap={4} h={"400px"} bg="green.100" ml={10} mr={10}>
                    {/* This is where I will map over all of the cards, so I would generate the grid items ... is there a way to do overview scroll/hide? */}

                    <GridItem rowSpan={1} colSpan={5} bg="blue.100"> Deck #1 </GridItem>
                    <GridItem rowSpan={1} colSpan={5}> Deck #2 </GridItem>
                    <GridItem rowSpan={1} colSpan={5}> Deck #3 </GridItem>
                    <GridItem rowSpan={1} colSpan={5}> Deck #4 </GridItem>
                    <GridItem rowSpan={1} colSpan={5}> Deck #5 </GridItem>
                </Grid>
            </Box>
        </>
    )
}