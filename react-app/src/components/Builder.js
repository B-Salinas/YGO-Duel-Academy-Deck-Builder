import React from 'react';
import Deck from "./Deck"
import Trunk from "./Trunk"

import {
    HStack,
    Box
} from "@chakra-ui/react";

export default function Builder() {
    return (
        <>
            <HStack>
                <Box w={"50%"}>
                    <Trunk />
                </Box>
                <Box w={"50%"}>
                    <Deck />
                </Box>
            </HStack>
        </>
    )
}
