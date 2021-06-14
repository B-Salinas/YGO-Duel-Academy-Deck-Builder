import React from 'react';

import {
    Flex,
    Text,
    Box,
    Grid,
    GridItem,
    Button,
    Heading,
    HStack,
    VStack
} from "@chakra-ui/react";

export default function CardView() {
    return (
        <>
            <Box>
                <Grid templateColumns="repeat(9, 1fr)" gap={2} h={40}> 
                    <GridItem colStart={2} colEnd={4} bg={"red.100"}>
                        Card Image Goes Here
                    </GridItem>

                    <GridItem colStart={4} colEnd={9} bg="blue.100" >
                        <Grid templateRows="repeat(3, 1fr)" templateColumns="repeat(5, 1fr)" gap={4}>
                            <GridItem ml={5} h={10} colStart={1} colEnd={6} bg="orange.100"> 
                                <HStack>
                                    <Box>
                                        Card ID
                                    </Box>
                                    <Box>
                                        Level
                                    </Box>
                                </HStack>
                            </GridItem>
                            <GridItem ml={5} colStart={1} colEnd={6} bg="orange.100">
                                <Box> Card Name </Box>
                            </GridItem>
                            <GridItem ml={5} colStart={1} colEnd={6} bg="orange.100"> 
                                <HStack>
                                    <Box>
                                        Deck Details
                                    </Box>
                                    <Box>
                                        Type / Race / Attr
                                    </Box>
                                    <Box>
                                        ATK / DEF
                                    </Box>
                                </HStack>
                            </GridItem>

                        </Grid>
                    </GridItem> 
                </Grid>
            </Box>
        </>
    )
}

