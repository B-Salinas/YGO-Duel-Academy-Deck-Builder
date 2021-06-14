import {
    Flex,
    Box,
    Image,
    Button,
    Spacer,
    Text,
    Heading,
    VStack
} from "@chakra-ui/react"; 
import React from 'react';
import { NavLink } from 'react-router-dom';

import DeckBuilder from "./DeckBuilder";
import LogoutButton from './auth/LogoutButton';
import AboutPage from './AboutPage'


export default function MainMenu () {


    return (
        <>
            <Flex bg={'#f7f7f7'} direction={"column"}>
                
                <Box align={"center"} justify={"center"} direction={'column'} mt={8}>
                    <Heading fontSize="6xl"> 
                        Main Menu
                    </Heading>
                </Box>

                <br />

                <VStack align={"center"} justify={"center"} spacing={10}>
                    <Flex>
                        <Button bg={"red.600"} color={"white"} _hover={{bg: "red.900" }} w={"750px"} letterSpacing='widest'>
                            <NavLink to="/deckbuilder" exact={true} activeClassName="active"> 
                                DECK BUILDER
                            </NavLink> 
                        </Button>
                    </Flex>

                    <Flex>
                        <Button bg={"orange.400"} color={"white"} w={"750px"} letterSpacing='widest' _hover={{ bg: "orange.700", color: "white" }}  >
                            <NavLink to="/about" exact={true} activeClassName="active">
                                ABOUT THE DEV
                            </NavLink>
                        </Button>
                    </Flex>

                    <Flex>
                        <LogoutButton />
                    </Flex>
                </VStack>

            </Flex>
        </>
    )
}