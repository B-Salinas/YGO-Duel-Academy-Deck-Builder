import React, {useEffect} from 'react';
import {
    Flex,
    Box,
    Grid,
    GridItem,
    Button,
    Heading
} from "@chakra-ui/react";
import { FaTrash as DeleteIcon } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, Link, useParams } from 'react-router-dom';
import { deleteOneDeck } from '../store/deck';
import { MainModal } from '../modal/Modal';

import { getOneDeck} from '../store/deckbuilder';


export default function DeckList() {

    const dispatch = useDispatch()
    const user = useSelector((state) => state?.session?.user)
    const newestDeck = useSelector(state => state?.decks?.new)
    
    useEffect(() => {
    }, [newestDeck])

    const handleDeleteDeck = async (value) => {
        await dispatch(deleteOneDeck(value))
    }

    return user && (
        <>
            <Box align={"center"} justify={"center"} direction={'row'} mt={8}>
                <Grid templateColumns="repeat(3, 1fr)" gap={6} justify="center">
                    <Flex align="left" ml={10}>
                        <NavLink to="/mainmenu" exact={true} activeClassName="active">
                            <Button 
                                bg='gray.400' 
                                color={"white"} 
                                letterSpacing='widest' 
                                _hover={{ bg: "gray.800", color: "white" }} > BACK TO MENU </Button>
                        </NavLink>
                    </Flex>
                    <Box align="center">
                        <Heading>
                            DECK LIST
                        </Heading>
                    </Box>
                    <Flex align="right" ml={450}>
                        <MainModal />
                    </Flex>

                </Grid>
            </Box>

            <br />
            <br />

            <Box pl={100} pr={100}>
                <Grid templateRows="repeat(5, 1fr)" templateColumns="repeat(5, 1fr)" gap={4} h={"400px"} ml={10} mr={10}>
                    {user.decks.map((deck, idx) => (
                        <>
                            <GridItem key={idx} rowSpan={1} colSpan={4}  >
                                <Link to={`/decks/${deck.id}/edit`}>
                                    <Heading size="lg" _hover={{ color: "green.400" }}> 
                                        {deck.name} 
                                    </Heading>
                                </Link>
                            </GridItem>
                            <GridItem key={idx} rowSpan={1} colSpan={1} align="right">
                                <Button align="right" value={deck.id} onClick={(value) => handleDeleteDeck(value)} _hover={{ color: "red.500" }}> <DeleteIcon /> </Button>
                            </GridItem>
                        </>
                    ))}
                </Grid>
            </Box>
        </>
    )
}