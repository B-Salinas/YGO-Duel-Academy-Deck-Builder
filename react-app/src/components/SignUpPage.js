import {
  Flex,
  Box,
  Image,
  Button,
  Spacer,
  Text,
  Link,
  AspectRatio
} from "@chakra-ui/react";
import React, { useState } from 'react';
import SignUpForm from './auth/SignUpForm'
import LoginForm from "./auth/LoginForm";

// ------------------------------------------------------------------------------------------//


export default function SignUpPage() {
  // const [formRender, setFormRender] = useState(true)

  // const renderButton = () => {
  //     const buttonRender = (
  //         <>
  //             <Flex align={"center"} justify={"center"} direction={'row'} mt={10}>
  //                 {formRender ? <p> Already have an account? &nbsp; </p> : <p> Don't have an account? &nbsp; </p>}
  //                 <Button onClick={() => setFormRender(!formRender)} _hover={{ bg: 'gray.500', color: 'white' }}>
  //                     {formRender ? "Log In" : "Sign Up"}
  //                 </Button >
  //             </Flex>
  //         </>
  //     )
  //     return buttonRender
  // }


  return (
    <>
      <Flex bg={'#f7f7f7'} direction={"column"}>

        <Box align={"center"} justify={"center"} direction={'column'} mt={8}>
          <Text fontSize="4xl">
            <Link href="/" _hover={{ color: "red.500", textDecoration: "none" }}>
              <center> <strong> Create a YGO DA Deck Builder Account </strong></center>
            </Link>
          </Text>
        </Box>

        <Flex justify={"center"} h={'100vh'} bg={'#f7f7f7'} >
          <Box w={'800px'} >
            <Flex align={"center"} justify={"center"} direction={'column'} mt={10} >
              <Image
                name={'image-next-to-signUp'}
                src={"https://ms.yugipedia.com//7/72/Duel_Academy.jpg"}
                mb={'25px'}
                w={'600px'}
              >
              </Image>
            </Flex>
          </Box>

          <Box align={"center"} justify={"center"} direction={'column'} w={'800px'}>
            <Spacer />
            <Box align={"center"} justify={"center"} direction={'column'} mt={5} mr={10} >
              <SignUpForm />
            </Box>
            <Spacer />
            {/* <Box align={"center"} justify={"center"} direction={'column'} >
                            {renderButton()}
                        </Box> */}
          </Box>
        </Flex>
      </Flex>

    </>
  )
}
