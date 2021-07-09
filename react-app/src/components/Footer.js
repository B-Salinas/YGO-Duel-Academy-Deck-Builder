import React from 'react';
import {
    Box,
    Flex,
    Link,
    Spacer,
    Heading,
} from '@chakra-ui/react';
import { SiLinkedin, SiGithub } from 'react-icons/si';


export default function Footer() {


    return (
        <>
            <Flex h={15} m={5}>
                <Box p="2" ml={25}>
                    <Link href={"https://github.com/B-Salinas/YGO-Duel-Academy-Deck-Builder"}>
                        <Flex direction={"row"} >
                            {/* Checkout Rene's Github for a nice footer!! */}
                            <Heading size="md"> <SiLinkedin /> </Heading>
                            <Heading size="md"> <SiGithub /> </Heading>
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






