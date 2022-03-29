import React from "react";

import { Box, Button, Tooltip } from "@chakra-ui/react";

function CreateNewDeckButton() {
  return (
    <>
      <Tooltip label="COMING SOON!">
        <Box>
          <Button
            isDisabled
            bg="green.400"
            color="white"
            letterSpacing="widest"
            _hover={{ bg: "green.800", color: "white" }}
          >
            CREATE NEW DECK
          </Button>
        </Box>
      </Tooltip>
    </>
  );
}

export default CreateNewDeckButton;
