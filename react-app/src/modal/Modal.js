import {
  Modal, //  The wrapper that provides context for its children.
  ModalOverlay, //  The dimmed overlay behind the modal dialog.
  ModalContent, //  The container for the modal dialog's content.
  ModalHeader, //  The header that labels the modal dialog.
  ModalFooter, //  The footer that houses the modal actions.
  ModalBody, //  The wrapper that houses the modal's main content.
  ModalCloseButton, //  The button that closes the modal.
  Button,
  useDisclosure, //  A handler to handle the open, close etc of the modal
  Link,
  Flex,
  FormControl,
  FormLabel,
  VStack,
  Input,
  InputGroup,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, Redirect, useHistory } from "react-router-dom";

import DeckForm from "./DeckForm";

// ------------------------------------------------------------------------------------------//

export function MainModal() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const dispatch = useDispatch();
  const history = useHistory();
  const user = useSelector((state) => state?.session?.user);

  const [deckName, setDeckName] = useState("");
  const [errors, setErrors] = useState([]);

  const [deckAdded, setDeckAdded] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newDeckFormData = {
      deckName,
      user_id: user.id,
    };
    console.log("NEW DECK FORM DATA HERE!!", newDeckFormData);

    console.log("DISPATCHING INFO");
    onClose();
    setDeckAdded(!deckAdded);
    // return <Redirect push to={"/decklist"} />
  };

  const updateDeckName = (e) => {
    setDeckName(e.target.value);
  };

  return (
    user && (
      <>
        <Flex align="right" marginRight={75}>
          <Button
            onClick={onOpen}
            bg="green.400"
            color="white"
            letterSpacing="widest"
            _hover={{ bg: "green.800", color: "white" }}
          >
            {" "}
            CREATE NEW DECK{" "}
          </Button>
        </Flex>

        <Modal onClose={onClose} isOpen={isOpen} isCentered>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Add a New Deck</ModalHeader>

            <ModalCloseButton />

            <ModalBody pb={6}>
              <form onSubmit={handleSubmit}>
                <div>
                  {errors.map((error, idx) => (
                    <div key={idx}>{error}</div>
                  ))}
                </div>

                <VStack spacing="24px">
                  <FormControl isRequired>
                    <FormLabel>Deck Name</FormLabel>
                    <InputGroup>
                      <Input
                        placeholder="Deck Name"
                        type="text"
                        value={deckName}
                        onChange={updateDeckName}
                      />
                    </InputGroup>
                  </FormControl>

                  <Button
                    onClick={handleSubmit}
                    bg="blue.400"
                    color="white"
                    letterSpacing="widest"
                    _hover={{ bg: "blue.800", color: "white" }}
                  >
                    Create New Deck
                  </Button>
                </VStack>
              </form>
            </ModalBody>

            <ModalFooter>
              {/* <Button bg="blue.400" color="white" letterSpacing="widest" _hover={{ bg: "blue.800", color: "white" }} > 
                                <Link to={`/decks/new`}> 
                                    Create new Deck 
                                </Link> 
                            </Button> */}
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  );
}
