import React from "react";

import { IconButton } from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";

function DeleteDeckButton() {
  return (
    <>
      <IconButton colorScheme="red" icon={<DeleteIcon />} />
    </>
  );
}

export default DeleteDeckButton;
