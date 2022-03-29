import React from "react";

import { IconButton } from "@chakra-ui/react";
import { EditIcon } from "@chakra-ui/icons";

function EditDeckButton() {
  return (
    <>
      <IconButton colorScheme="gray" icon={<EditIcon />} />
    </>
  );
}

export default EditDeckButton;
