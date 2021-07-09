import {
    Flex,
    Box,
    Button,
    Heading,
    VStack
} from "@chakra-ui/react"; 
import React from 'react';
import { NavLink } from 'react-router-dom';

import LogoutButton from './auth/LogoutButton';


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
                        <NavLink to="/store" exact={true} activeClassName="active">
                            <Button bg={"green.500"} color={"white"} _hover={{ bg: "green.700" }} w={"750px"} letterSpacing='widest'>
                                STORE
                            </Button>
                        </NavLink>
                    </Flex>

                    <Flex>
                        <NavLink to="/decklist" exact={true} activeClassName="active"> 
                            <Button bg={"red.600"} color={"white"} _hover={{bg: "red.900" }} w={"750px"} letterSpacing='widest'>
                                DECK LIST
                            </Button>
                        </NavLink> 
                    </Flex>

                    <Flex>
                        <NavLink to="/users/<int:id>" exact={true} activeClassName="active">
                            <Button bg={"blue.400"} color={"white"} _hover={{ bg: "blue.700" }} w={"750px"} letterSpacing='widest'>
                                USER PROFILE
                            </Button>
                        </NavLink>
                    </Flex>

                    <Flex>
                        <NavLink to="/about" exact={true} activeClassName="active">
                            <Button bg={"orange.400"} color={"white"} w={"750px"} letterSpacing='widest' _hover={{ bg: "orange.700", color: "white" }}  >
                                ABOUT THE DEV
                            </Button>
                        </NavLink>
                    </Flex>

                    <Flex>
                        <LogoutButton />
                    </Flex>
                </VStack>

            </Flex>
        </>
    )
}