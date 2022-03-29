import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { IconButton } from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";

import { deleteUserDeck } from "../../store/session";

// incorporate alert to confirm deleting deck

function DeleteDeckButton({ deckId }) {
  const dispatch = useDispatch();

  const handleDelete = async () => {
    // dispatch(deleteUserDeck(deckId));
    console.log("DECK_ID", deckId);
    console.log("DISPATCHED");
  };

  return (
    <>
      <IconButton
        onClick={handleDelete}
        colorScheme="red"
        icon={<DeleteIcon />}
      />
    </>
  );
}

export default DeleteDeckButton;
