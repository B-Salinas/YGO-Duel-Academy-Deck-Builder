import React from 'react';
import {
    Flex,
    Text,
    Box,
    Grid,
    Button,
    Heading,
    HStack,
} from "@chakra-ui/react";
import {NavLink} from 'react-router-dom';

import DeckNav from './DeckNav';
import Builder from './Builder';
import Trunk from './Trunk'
import Deck from './Deck'
import CardView from './CardView';


export default function DeckBuilder() {

    return (
        <>
            <Box align={"center"} justify={"center"} direction={'row'} mt={8}>
                <Grid templateColumns="repeat(3, 1fr)" gap={6} justify="center">
                    <Flex align="left" ml={10}>
                        <NavLink to="/mainmenu" exact={true} activeClassName="active">
                            <Button bg='gray.400' color={"black"} letterSpacing='widest' _hover={{ bg: "gray.800", color: "white" }} color='white' > BACK TO MENU </Button>
                        </NavLink>
                    </Flex>
                    <Box align="center">
                        <Heading>
                            DECK BUILDER
                        </Heading>
                    </Box>
                    <Flex align="right" ml={300}>
                        <NavLink to="/decklist" exact={true} activeClassName="active">
                            <Button bg='gray.400' color={"black"} letterSpacing='widest' _hover={{ bg: "gray.800", color: "white" }} color='white' > DECK LIST </Button>
                        </NavLink>
                    </Flex>

                </Grid>
            </Box>

            <br />

            <Box>
                <DeckNav />
            </Box>

            <br /> 
            
            <HStack>
                <Box w={"50%"}>
                    <Trunk />
                </Box>
                <Box w={"50%"}>
                    <Deck />
                </Box>
            </HStack>

            {/* <Box>
                <Builder />
            </Box> */}

            <br />

            <Box>
                <CardView />
            </Box>

        </>
    )
};