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
export default function Trunk() {
    
    const user = useSelector((state) => state.session.user)


    return user && (
        <>
            <Box pl={30} pr={30}>
                <Grid templateRows="repeat(5, 1fr)" templateColumns="repeat(5, 1fr)" gap={4} h={"400px"}  bg="green.100">

                        {user.trunk_cards.map((card, idx) => (
                            <GridItem rowSpan={1} colSpan={3}> {card.name} </GridItem>
                        ))}
                    {/* <GridItem rowSpan={1} colSpan={3}> Mystical Elf </GridItem>
                    <GridItem rowSpan={1} colSpan={3}> Baby Dragon </GridItem>
                    <GridItem rowSpan={1} colSpan={3}> Time Wizard </GridItem>
                    <GridItem rowSpan={1} colSpan={3}> Harpie Lady </GridItem>
                    <GridItem rowSpan={1} colSpan={3}> Harpie Lady Sister </GridItem> */}
                </Grid>
            </Box>
        </>
    )
}