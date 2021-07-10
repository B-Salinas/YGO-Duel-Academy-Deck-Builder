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
    Link,
    Flex
} from "@chakra-ui/react";
import React from 'react';
import DeckForm from "./DeckForm";

// ------------------------------------------------------------------------------------------//


export function MainModal() {
    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <>
            <Flex align="right" marginRight={75}>
                <Button onClick={onOpen} bg="green.400" color="white" letterSpacing="widest" _hover={{ bg: "green.800", color: "white" }} > ADD </Button>
            </Flex>

            <Modal onClose={onClose} isOpen={isOpen} isCentered>
                <ModalOverlay />
                <ModalContent >
                    <ModalHeader>
                        Add a New Deck
                    </ModalHeader>

                    <ModalCloseButton />

                    <ModalBody pb={6}>
                        <DeckForm />
                    </ModalBody>

                    <ModalFooter>
                        
                            <Button bg="blue.400" color="white" letterSpacing="widest" _hover={{ bg: "blue.800", color: "white" }} > 
                                <Link to={`/decks/new`}> 
                                    Create new Deck 
                                </Link> 
                            </Button>
                        
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}
