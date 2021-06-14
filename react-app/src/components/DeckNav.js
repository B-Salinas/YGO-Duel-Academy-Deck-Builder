import React from 'react';
import {
    Flex,
    Text,
    Box,
    Grid,
    Button,
    Heading,
    HStack,
    VStack
} from "@chakra-ui/react";

export default function DeckNav () {
    return (
        <>
            <Box>
                <Grid templateColumns="repeat(3, 1fr)" gap={6}>
                    <Box align="center" >
                        <Heading> Trunk </Heading>
                    </Box>
                    <Grid templateColumns="repeat(3, 1fr)" gap={6} align="center" >
                        <Text> Main </Text>
                        <Text> Fusion </Text>
                        <Text> Side </Text>
                    </Grid>
                    <Box align="center" >
                        <Heading>
                            DECK NAME GOES HERE
                        </Heading>
                    </Box>
                </Grid>

                <br />

                <Grid templateColumns="repeat(3, 1fr)" gap={2} bg="red.100" h={100} align="center">
                    <Box align="center" h={50} mt={45}>
                        <Heading size="xs" > # of Cards in Trunk </Heading>
                    </Box>

                    <Grid templateColumns="repeat(9, 1fr)" gap={2} align="center" justify="center" mt={3} h={75} bg="green.400">
                        
                        <Box>
                            <Grid templateColumns="repeat(3, 1fr)" gap={2} mt={3} ml={7} h={50} align="center" bg="red.300">
                                <Box w={100} bg="gray.100"> 1-4 </Box>
                                <Box w={100} bg="gray.100"> 5-6 </Box>
                                <Box w={100} bg="gray.100"> 7+ </Box>
                            </Grid>
                        </Box>

                        <Box>
                            <Grid templateColumns="repeat(6, 1fr)" gap={2} mt={3} h={50} align="center" bg="red.300">
                                <Box w={100} bg="yellow.100"> Spell </Box>
                                <Box w={100} bg="yellow.100"> Trap </Box>
                                <Box w={100} bg="yellow.100"> Normal </Box>
                                <Box w={100} bg="yellow.100"> Effect </Box>
                                <Box w={100} bg="yellow.100"> Fusion </Box>
                                <Box w={100} bg="yellow.100"> Ritual </Box>
                            </Grid>
                        </Box>
                    </Grid>

                    <Box align="center" h={50} mt={45} >
                        <Heading size="xs"> Current Sorting Method </Heading>
                    </Box>
                </Grid>

                

            </Box>
            
        </>
    )
}