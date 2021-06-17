import React from 'react';
import {
    Flex,
    Box,
    Image,
    Button,
    Spacer,
    Text,
    VStack,
    ButtonGroup,
    Heading,
    Container,
    Grid
} from "@chakra-ui/react";
import { NavLink } from 'react-router-dom';

export default function Store() {
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
                            STORE
                        </Heading>
                    </Box>
                </Grid>
            </Box>
        </>
    )
}