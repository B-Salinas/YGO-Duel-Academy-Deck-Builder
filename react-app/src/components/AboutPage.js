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
import { SiLinkedin, SiGithub } from 'react-icons/si';

export default function AboutPage() {

    return (
        <>
            
            <Flex bg={'#f7f7f7'} direction={"column"}>

                <Box align={"center"} justify={"center"} direction={'row'} mt={8}>
                    <Grid templateColumns="repeat(3, 1fr)" gap={6}>
                        <Flex ml={10}>
                            <NavLink to="/mainmenu" exact={true} activeClassName="active">
                                <Button bg='gray.400' color={"black"} letterSpacing='widest' _hover={{ bg: "gray.800", color: "white" }} color='white' > BACK TO MENU </Button>
                            </NavLink>
                        </Flex>
                        <Box>
                            <Heading>
                                ABOUT THE DEV
                            </Heading>
                        </Box>
                    </Grid>
                </Box>

                <Spacer />

                <Flex justify={"center"} h={'100vh'} bg={'#f7f7f7'} >
                    <Box w={'800px'} >
                        <Flex align={"center"} justify={"center"} direction={'column'} mt={10} ml={40}>
                            <Image
                                name={'me'}
                                src={"https://avatars.githubusercontent.com/u/31112601?v=4"}
                                mb={'25px'}
                                w={'400px'}
                            >
                            </Image>
                        </Flex>
                    </Box>

                    <Box align={"center"} justify={"center"} direction={'column'} w={'800px'} >
                        <VStack align={"center"} justify={"center"} direction={'column'} w={'800px'}>
                            <Box align={"center"} justify={"center"} direction={'column'} mt={10} >
                                <Heading fontSize="3xl">Bianca "B" Salinas </Heading>
                            </Box>

                            <br />

                            <Box align={"center"} justify={"center"} direction={'column'} mt={5} mr={10} >
                                <Text fontSize="lg"> Designer & Software Developer </Text>
                            </Box>

                            <VStack align={"center"} justify={"center"} w={'800px'}>
                                <ButtonGroup align={"center"} justify={"center"} direction={"column"}>
                                    <Button bg="gray.500" color="white" leftIcon={<SiGithub />} >
                                        <a href='https://github.com/B-Salinas'> Github </a>
                                    </Button>
                                    <Button colorScheme="linkedin" leftIcon={<SiLinkedin />}>
                                        <a href='https://www.linkedin.com/in/b-salinas/'> LinkedIn </a>
                                    </Button>
                                </ButtonGroup>

                                <br />
                                <Container align={"left"} justify={"center"} w={'700px'} >
                                    <Text fontSize="lg">
                                        After graduating with a B.S. in Mathematics, I decided to transition into tech and software development by attending App Academy as a full-time software engineering student in the midst of a global pandemic.
                                    </Text>
                                    <br />
                                    <Text>
                                        In my free time, I enjoy going on long walks and reading — I'm currently reading "all about love: new visions" by bell hooks and "In the Realm of Hungry Ghosts" by Gabor Maté
                                    </Text>
                                </Container>
                                
                            </VStack>
                        </VStack>
                    </Box>
                </Flex>
            </Flex>
        </>
    )   
}
