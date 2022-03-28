import React from "react";

import { Button } from "@chakra-ui/react";

function EditProfileButton() {
  return (
    <>
      <Button
        bg="red.400"
        color="white"
        letterSpacing="widest"
        _hover={{ bg: "red.800", color: "white" }}
      >
        EDIT PROFILE
      </Button>
    </>
  );
}

export default EditProfileButton;
