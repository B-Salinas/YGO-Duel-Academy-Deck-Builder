import React, { useEffect } from 'react';
import {
    Flex,
    Box,
    Grid,
    Button,
    Heading,
    HStack,
} from "@chakra-ui/react";
import {NavLink, useParams} from 'react-router-dom';
import DeckNav from './DeckNav';
import Trunk from './Trunk'
import Deck from './Deck'
import CardView from './CardView';
import { useDispatch } from 'react-redux';
import { getOneDeck, getOneCard } from '../store/deckbuilder';


export default function DeckBuilder() {

    const dispatch = useDispatch()
    const {deck_id} = useParams()

    useEffect(() => {
        dispatch(getOneDeck(deck_id))
    }, [deck_id])

    return (
        <>
            <Box align={"center"} justify={"center"} direction={'row'} mt={8}>
                <Grid templateColumns="repeat(3, 1fr)" gap={6} justify="center">
                    <Flex align="left" ml={10}>
                        <NavLink to="/decklist" exact={true} activeClassName="active">
                            <Button bg='gray.400' color={"white"} letterSpacing='widest' _hover={{ bg: "gray.800", color: "white" }} > BACK TO DECK LIST </Button>
                        </NavLink>
                    </Flex>
                    <Box align="center">
                        <Heading>
                            DECK BUILDER
                        </Heading>
                    </Box>
                    <Flex align="right" ml={300}>
<<<<<<< HEAD
                        <Button bg='green.400' color={"white"} letterSpacing='widest' _hover={{ bg: "green.800", color: "white" }} > SAVE DECK </Button>
=======
                        <NavLink to="/decklist" exact={true} activeClassName="active">
                            <Button bg='gray.400' color={"black"} letterSpacing='widest' _hover={{ bg: "gray.800", color: "white" }} > DECK LIST </Button>
                        </NavLink>
>>>>>>> 82aea66... removed protected routes for the meantime
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

            <br />

            <Box>
                {/* <CardView /> */}
            </Box>

        </>
    )
};