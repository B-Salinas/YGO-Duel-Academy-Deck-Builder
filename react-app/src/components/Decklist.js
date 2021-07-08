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
import { useSelector } from 'react-redux';
import { NavLink, Link } from 'react-router-dom';
import { MainModal } from '../modal/Modal';
import { Alert } from '../alert/Alert';
import DeckForm from '../modal/DeckForm';


export default function DeckList() {

    const user = useSelector((state) => state.session.user)

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
                    <Flex align="right" ml={300}>
                        <MainModal />
                    </Flex>

                </Grid>
            </Box>

            <br />
            <br />

            <Box pl={30} pr={30}>
                <Grid templateRows="repeat(5, 1fr)" templateColumns="repeat(5, 1fr)" gap={4} h={"400px"} bg="green.100" ml={10} mr={10}>
                    {user.decks.map((deck, idx) => (
                        <GridItem key={idx} rowSpan={1} colSpan={5} bg="blue.100"> 
                            <Link to={`/decks/${deck.id}/edit`}>
                                {deck.name}
                            </Link>
                        </GridItem>
                    ))}
                </Grid>
            </Box>
        </>
    )
}