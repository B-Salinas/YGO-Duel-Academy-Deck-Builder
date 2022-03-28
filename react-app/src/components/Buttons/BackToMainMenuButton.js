import React from "react";
import { NavLink } from "react-router-dom";

import { Button } from "@chakra-ui/react";

function BackToMainMenuButton() {
  return (
    <>
      <NavLink to="/mainmenu" exact={true} activeClassName="active">
        <Button
          bg="gray.400"
          color="white"
          letterSpacing="widest"
          p={4}
          _hover={{ bg: "gray.800", color: "white" }}
        >
          BACK TO MENU
        </Button>
      </NavLink>
    </>
  );
}

export default BackToMainMenuButton;
