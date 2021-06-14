import React from 'react';
import {
    Box,
    Grid,
    Flex,
    Link,
    Stack,
    Spacer,
    Heading,
    Container,
    SimpleGrid,
    ListHeader,
    useColorModeValue,
    Text,
    HStack,
    Icon
} from '@chakra-ui/react';
import { SiLinkedin, SiGithub } from 'react-icons/si';
import { ReactNode } from 'react';


export default function Footer() {


    return (
        <>
            <Flex h={15} m={5}>
                <Box p="2" ml={25}>
                    <Link href={"https://github.com/B-Salinas/YGO-Duel-Academy-Deck-Builder"}>
                        <Flex direction={"row"} >
                            <Heading size="md"> <SiGithub /> </Heading>
                            <Heading size="sm"> &nbsp; Checkout the Github!</Heading>
                        </Flex>
                    </Link>
                </Box>
                <Spacer />
                <Box mr={25}>
                    <Heading size="md">© 2021 YGO DA Deck Builder</Heading>
                    
                </Box>
            </Flex>
        </>
    )
}






