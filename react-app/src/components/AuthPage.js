import {
    Flex,
    Box,
    Image,
    Button,
    Spacer,
    Text
} from "@chakra-ui/react";
import React, { useContext, useRef, useState, useEffect } from 'react';
// import
import ReactDOM from 'react-dom';
import SignUpForm from './auth/SignUpForm'
import LoginForm from "./auth/LoginForm";

// ------------------------------------------------------------------------------------------//


export default function AuthPage() {
    const [formRender, setFormRender] = useState(true)

    const renderButton = () => {
        const buttonRender = (
            <>
                <Flex align={"center"} justify={"center"} direction={'row'} mt={10}>
                    {formRender ? <p> Already have an account? &nbsp; </p> : <p> Don't have an account? &nbsp; </p>}
                    <Button onClick={() => setFormRender(!formRender)}>
                        {formRender ? "Log In" : "Sign Up"}
                    </Button >
                </Flex>
            </>
        )
        return buttonRender
    }


    return (
        <>
            <Flex bg={'#f7f7f7'} direction={"column"}>

                <Box align={"center"} justify={"center"} direction={'column'} mt={8}>
                    <Text fontSize="4xl">
                        {formRender ? <center> <strong> Create a YGO DA Deck Builder Account </strong></center> : <center> <strong> Log in to YGO DA Deck Builder</strong></center>} 
                    </Text>
                    
                </Box>

                <Flex justify={"center"} h={'100vh'} bg={'#f7f7f7'} >
                    <Box w={'800px'} >
                        <Flex align={"center"} justify={"center"} direction={'column'} mt={10} >
                            <Image
                                name={'image-next-to-signUp'}
                                src={formRender ? "https://ms.yugipedia.com//7/72/Duel_Academy.jpg" : "https://www.wikihow.com/images/thumb/1/18/Build-a-Beginner-Yu-Gi-Oh%21-Deck-Step-2-Version-2.jpg/v4-460px-Build-a-Beginner-Yu-Gi-Oh%21-Deck-Step-2-Version-2.jpg.webp"}
                                mb={'25px'}
                                w={'600px'}
                            >
                            </Image>
                        </Flex>
                    </Box>

                    <Box align={"center"} justify={"center"} direction={'column'} w={'800px'}>
                        <Spacer />
                        <Box align={"center"} justify={"center"} direction={'column'} mt={5} mr={10} >
                            {formRender ? <SignUpForm /> : <LoginForm />}
                        </Box>
                        <Spacer />
                        <Box align={"center"} justify={"center"} direction={'column'} >
                            {renderButton()}
                        </Box>
                    </Box>
                </Flex>
            </Flex>

        </>
    )
}