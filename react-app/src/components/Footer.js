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
            <Flex h="60px" align="center" justify="space-between" boxShadow="md" p="6" rounded="md" bg="white" py="10px" px="80px" pos="relative">
            
                <Box fontSize="16px" > © 2021 YGO DA Deck Builder. No rights reserved. </Box>
                
                <Flex align="center" justify="space-between" >

                    <Box mr="20px" >
                        <Link href="https://github.com/b-salinas" fontSize="16px" _hover={{ color: "#CC4400", textDecoration: "none" }} isExternal> About the Developer </Link>
                    </Box>
                      
                    <Box mr="20px">
                        <Heading as="h2" size="xl">
                            <Link href="https://github.com/B-Salinas/YGO-Duel-Academy-Deck-Builder" _hover={{ color: "#69a74e" }} isExternal>
                                <SiGithub />
                            </Link>
                        </Heading>
                    </Box>
                        
                    <Box mr="20px">
                        <Heading as="h2" size="xl">
                            <Link href="https://www.linkedin.com/in/b-salinas/" _hover={{ color: "#1877F2" }} isExternal>
                                <SiLinkedin />
                            </Link>
                        </Heading>
                    </Box>
                    
                </Flex>
                
            </Flex>
        </>
    )
}






