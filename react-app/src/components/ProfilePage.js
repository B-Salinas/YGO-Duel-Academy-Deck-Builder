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
    Grid,
    Tooltip
} from "@chakra-ui/react";
import { NavLink } from 'react-router-dom';
import { SiLinkedin, SiGithub } from 'react-icons/si';
import { useSelector } from 'react-redux';

export default function ProfilePage() {
    const user = useSelector((state) => state?.session?.user)

    return (
        <>

            <Flex bg={'#f7f7f7'} direction={"column"}>

                <Box align={"center"} justify={"center"} direction={'row'} mt={8}>
                    <Grid templateColumns="repeat(3, 1fr)" gap={6}>
                        <Flex ml={10}>
                            <NavLink to="/mainmenu" exact={true} activeClassName="active">
                                <Button bg='gray.400' color={"black"} letterSpacing='widest' _hover={{ bg: "gray.800", color: "white" }} > BACK TO MENU </Button>
                            </NavLink>
                        </Flex>
                        <Box>
                            <Heading color="green.600">
                                PROFILE PAGE
                            </Heading>
                        </Box>
                    </Grid>
                </Box>

                <Spacer />

                <Flex justify={"center"} h={'100vh'} bg={'#f7f7f7'} >
                    <br />
                    <Box w={'800px'} >
                        <Flex align={"center"} justify={"center"} direction={'column'} mt={10} ml={40}>
                            <Image
                                name={'AVATAR PIC'}
                                src={user.profile_img}
                                mb={'25px'}
                                w={'400px'}
                            >
                            </Image>
                        </Flex>
                    </Box>

                    <Box align={"center"} justify={"center"} direction={'column'} w={'800px'} >
                        <VStack align={"center"} justify={"center"} direction={'column'} w={'800px'}>
                            <Box align={"center"} justify={"center"} direction={'column'} mt={10} >
                                <Heading size="3xl"> {user.name} </Heading>
                            </Box>

                            <br />

                            <Box align={"center"} justify={"center"} direction={'column'} mt={5} mr={10} >
                                <Heading size="lg"> {user.title} </Heading>
                                <Heading size="md"> {user.dorm} </Heading>
                            </Box>

                            <br />

                            <VStack align={"center"} justify={"center"} w={'800px'}>
                                <ButtonGroup align={"center"} justify={"center"} direction={"column"}>
                                    <Button bg="blue.500" color="white"  >
                                        <a href='/decklist'> DeckList </a>
                                    </Button>

                                    {/* <Tooltip label="COMING SOON!">
                                        <Button isDisabled bg="red.500" color="white" >
                                            <a href='#'> Edit Profile </a>
                                        </Button>
                                    </Tooltip> */}
                                </ButtonGroup>
                            </VStack>
                        </VStack>
                    </Box>
                </Flex>
            </Flex>
        </>
    )
}
