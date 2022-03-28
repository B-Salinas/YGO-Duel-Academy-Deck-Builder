import {
  Flex,
  Box,
  Button,
  Heading,
  VStack,
  Tooltip
} from "@chakra-ui/react";
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { NavLink, useHistory } from 'react-router-dom';
import { getAllDecks } from "../store/deck";

import LogoutButton from './auth/LogoutButton';


export default function MainMenu() {
  const dispatch = useDispatch();
  const history = useHistory();
  const user = useSelector((state) => state?.session?.user)
  const user_decks = useSelector((state) => state?.session?.user?.decks)

  useEffect(() => {
    if (user) {
      dispatch(getAllDecks(user.id));
    }
  }, [user]);

  if (!user) history.push("/");

  return user && (
    <>
      <Flex bg={'#f7f7f7'} direction={"column"}>

        <Box align={"center"} justify={"center"} direction={'column'} mt={8}>
          <Heading fontSize="6xl">
            Main Menu
          </Heading>
        </Box>

        <br />

        <VStack align={"center"} justify={"center"} spacing={10}>

          <Flex>
            <Tooltip label="COMING SOON!">
              <NavLink to="/store" exact={true} activeClassName="active">
                <Button isDisabled bg={"green.500"} color={"white"} _hover={{ bg: "green.700" }} w={"750px"} letterSpacing='widest'>
                  STORE
                </Button>
              </NavLink>
            </Tooltip>

          </Flex>

          <Flex>
            <NavLink to="/decklist" exact={true} activeClassName="active">
              <Button bg={"red.600"} color={"white"} _hover={{ bg: "red.900" }} w={"750px"} letterSpacing='widest'>
                DECK LIST
              </Button>
            </NavLink>
          </Flex>

          <Flex>
            <NavLink to="/users/<int:id>" exact={true} activeClassName="active">
              <Button bg={"blue.400"} color={"white"} _hover={{ bg: "blue.700" }} w={"750px"} letterSpacing='widest'>
                USER PROFILE
              </Button>
            </NavLink>
          </Flex>

          <Flex>
            <NavLink to="/about" exact={true} activeClassName="active">
              <Button bg={"orange.400"} color={"white"} w={"750px"} letterSpacing='widest' _hover={{ bg: "orange.700", color: "white" }}  >
                ABOUT THE DEV
              </Button>
            </NavLink>
          </Flex>

          <Flex>
            <LogoutButton />
          </Flex>
        </VStack>

      </Flex>
    </>
  )
}
