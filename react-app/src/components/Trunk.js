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
export default function Trunk() {
    return (
        <>
            <Box pl={30} pr={30}>
                <Grid templateRows="repeat(5, 1fr)" templateColumns="repeat(5, 1fr)" gap={4} h={"400px"}  bg="green.100">
                    {/* This is where I will map over all of the cards, so I would generate the grid items ... is there a way to do overview scroll/hide? */}
                    <GridItem rowSpan={1} colSpan={3}> Mystical Elf </GridItem>
                    <GridItem rowSpan={1} colSpan={3}> Baby Dragon </GridItem>
                    <GridItem rowSpan={1} colSpan={3}> Time Wizard </GridItem>
                    <GridItem rowSpan={1} colSpan={3}> Harpie Lady </GridItem>
                    <GridItem rowSpan={1} colSpan={3}> Harpie Lady Sister </GridItem>
                </Grid>
            </Box>
        </>
    )
}