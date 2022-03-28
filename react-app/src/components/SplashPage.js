import React from "react";
import {
  Flex,
  Box,
  Button,
  Heading,
  HStack,
  AspectRatio,
  Center,
  Link,
} from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";
import { login } from "../store/session";

export default function SplashPage() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.session.user);

  if (user) {
    return <Redirect to="/mainmenu" />;
  }

  // const handleDemo = async (e) => {
  //     e.preventDefault();
  //     const email = 'demo@aa.io';
  //     const password = 'password'
  //     const dispatched = await dispatch(login(email, password))

  //     if (dispatched.errors) {
  //         setErrors(dispatched.errors)
  //     } else {
  //         history.push('/')
  //     }
  // };

  const demoLogin = () => {
    const email = "demo@aa.io";
    const password = "password";
    dispatch(login(email, password));
  };

  return (
    <>
      <Flex bg={"#f7f7f7"} direction={"column"}>
        <Box align={"center"} justify={"center"} direction={"column"} mt="35px">
          <Heading fontSize="4xl">YGO Duel Academy Deck Builder</Heading>
        </Box>

        <br />

        <Flex alignContent="center" justify="center" pb="50px">
          <AspectRatio w="50em" ratio={16 / 9} m="25px">
            <iframe
              title="YGO S1 Opening"
              src="https://www.youtube.com/embed/bDfgAKPrfq8"
              allowFullScreen
            />
          </AspectRatio>
        </Flex>

        <br />

        <HStack align={"center"} justify={"center"} spacing={10} mb="50px">
          <Flex>
            <Button
              bg={"purple.600"}
              color={"white"}
              _hover={{ bg: "purple.900" }}
              letterSpacing="widest"
            >
              <Link href="/sign-up">NEW GAME</Link>
            </Button>
          </Flex>

          <Flex>
            <Button
              bg={"red.600"}
              color={"white"}
              _hover={{ bg: "red.900" }}
              letterSpacing="widest"
              onClick={demoLogin}
            >
              GUEST DUELIST
            </Button>
          </Flex>

          <Flex>
            <Button
              bg={"yellow.400"}
              color={"white"}
              letterSpacing="wider"
              _hover={{ bg: "yellow.700", color: "white" }}
            >
              <Link href="/login">CONTINUE</Link>
            </Button>
          </Flex>
        </HStack>
      </Flex>
    </>
  );
}
