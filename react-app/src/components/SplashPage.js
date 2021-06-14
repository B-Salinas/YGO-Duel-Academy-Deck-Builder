import React, { useState, useEffect } from "react";
import {
    Flex,
    Box,
    Button,
    Heading,
    HStack,
    Image
} from "@chakra-ui/react";
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux"
import { Redirect, useHistory } from 'react-router-dom';
import { login } from '../store/session'



export default function SplashPage() {

    const dispatch = useDispatch();
    const history = useHistory();
    const user = useSelector(state => state.session.user);

    const [errors, setErrors] = useState([]);


    if (user) {
        return <Redirect to="/mainmenu" />;
    }

    const handleDemo = async (e) => {
        e.preventDefault();
        const email = 'demo@aa.io';
        const password = 'password'
        const dispatched = await dispatch(login(email, password))

        if (dispatched.errors) {
            setErrors(dispatched.errors)
        } else {
            history.push('/')
        }
    };


    return (
        <>
            <Flex bg={'#f7f7f7'} direction={"column"}>

                <Box align={"center"} justify={"center"} direction={'column'} mt={8}>
                    <Heading fontSize="4xl">
                        YGO Duel Academy Deck Builder
                    </Heading>
                </Box>

                <br />

                <HStack align={"center"} justify={"center"} spacing={10}>
                    <Flex>
                        <Button bg={"purple.600"} color={"white"} _hover={{ bg: "purple.900" }} letterSpacing='widest'>
                            <NavLink to="/sign-up" exact={true} activeClassName="active">
                                NEW GAME
                            </NavLink>
                        </Button>
                    </Flex>

                    <Flex>
                        <Button bg={"red.600"} color={"white"} _hover={{ bg: "red.900" }} letterSpacing='widest' onClick={handleDemo}>
                            GUEST DUELIST
                        </Button>
                    </Flex>

                    <Flex>
                        <Button bg={"yellow.400"} color={"white"} letterSpacing='wider' _hover={{ bg: "yellow.700", color: "white" }}  >
                            <NavLink to="/login" exact={true} activeClassName="active">
                                CONTINUE
                            </NavLink>
                        </Button>
                    </Flex>
                </HStack>

            </Flex>
        </>
    )
}