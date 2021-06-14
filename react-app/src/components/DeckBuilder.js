import React from 'react';
import {
    Flex,
    Text,
    Box,
    Grid,
    Button,
    Heading
} from "@chakra-ui/react";
import {NavLink} from 'react-router-dom';
export default function DeckBuilder() {

    return (
        <>
            <Box align={"center"} justify={"center"} direction={'row'} mt={8}>
                <Grid templateColumns="repeat(3, 1fr)" gap={6}>
                    <Flex ml={10}>
                        <NavLink to="/mainmenu" exact={true} activeClassName="active">
                            <Button bg='gray.400' color={"black"} letterSpacing='widest' _hover={{ bg: "gray.800", color: "white" }} color='white' > BACK TO MENU </Button>
                        </NavLink>
                    </Flex>
                    <Box>
                        <Heading>
                            DECK BUILDER
                        </Heading>
                    </Box>
                </Grid>
            </Box>

            <Box bg="orange.400">
                <Grid templateColumns="repeat(12, 1fr)" gap={2} h={1000} bg="blue.200">
                    <Box w="70px" h="10" bg="blue.500" />
                    <Box w="70px" h="10" bg="blue.500" />
                    <Box w="70px" h="10" bg="blue.500" />
                    <Box w="70px" h="10" bg="blue.500" />
                    <Box w="70px" h="10" bg="blue.500" />
                    <Box w="70px" h="10" bg="blue.500" />
                    <Box w="70px" h="10" bg="blue.500" />
                    <Box w="70px" h="10" bg="blue.500" />
                    <Box w="70px" h="10" bg="blue.500" />
                    <Box w="70px" h="10" bg="blue.500" />
                    <Box w="70px" h="10" bg="blue.500" />
                    <Box w="70px" h="10" bg="blue.500" />
                </Grid>
            </Box>
        </>
    )
};