import React from "react";

import { Button } from "@chakra-ui/react";

function CreateNewDeckButton() {
  return (
    <>
      <Button
        bg="green.400"
        color="white"
        letterSpacing="widest"
        _hover={{ bg: "green.800", color: "white" }}
      >
        CREATE NEW DECK
      </Button>
    </>
  );
}

export default CreateNewDeckButton;
