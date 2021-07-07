import {
    Modal,                   //  The wrapper that provides context for its children.
    ModalOverlay,            //  The dimmed overlay behind the modal dialog.
    ModalContent,            //  The container for the modal dialog's content.
    ModalHeader,             //  The header that labels the modal dialog.
    ModalFooter,             //  The footer that houses the modal actions.
    ModalBody,               //  The wrapper that houses the modal's main content.
    ModalCloseButton,        //  The button that closes the modal.
    Button,
    useDisclosure,           //  A handler to handle the open, close etc of the modal
    useOutsideClick,         //  A handler to handle click when outside the ref element to close
    Link,
    Flex
} from "@chakra-ui/react";
import React, {useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import DeckForm from "./DeckForm";

// ------------------------------------------------------------------------------------------//


export function MainModal() {
    const { isOpen, onOpen, onClose } = useDisclosure()


    // const [formRender, setFormRender] = useState(true)

    // const renderButton = () => {
    //     const buttonRender = (
    //         <>
    //             {formRender ? <p> Already have an account? &nbsp; </p> : <p> Don't have an account? &nbsp; </p>}
    //             <Button onClick={() => setFormRender(!formRender)}>
    //                 {formRender ? "Log In" : "Sign Up"}
    //             </Button >
    //         </>
    //     )
    //     return buttonRender
    // }

    // useEffect(() => {
    //     onOpen()
    // }, [])

    return (
        <>
            <Flex align="right" ml={300}>
                <Button onClick={onOpen} bg="red.400" color="white" letterSpacing="widest" _hover={{ bg: "red.800", color: "white" }} > ADD </Button>
            </Flex>

            <Modal onClose={onClose} isOpen={isOpen} isCentered>
                <ModalOverlay />
                <ModalContent >
                    <ModalHeader>
                        Create a Deck
                    </ModalHeader>

                    <ModalCloseButton />

                    <ModalBody pb={6}>
                        <DeckForm />
                    </ModalBody>

                    <ModalFooter>
                        <Button bg="blue.400" color="white" letterSpacing="widest" _hover={{ bg: "blue.800", color: "white" }} > Create new Deck  </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}
