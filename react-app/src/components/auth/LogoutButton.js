import React from "react";
import {
  Button,
  Flex,

} from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { logout } from "../../store/session";

const LogoutButton = () => {
  const dispatch = useDispatch();
  
  const onLogout = async (e) => {
    dispatch(logout());
  };

  return (
    <>
      <Flex >
        <Button 
          bg='gray.400' 
          color={"black"} 
          w={"750px"} 
          letterSpacing='widest' 
          onClick={onLogout} 
          type="Submit"
          _hover={{ bg: "gray.800", color: "white" }} 
        > 
          LOG OUT 
        </Button>
      </Flex>
    </>
  )
};

export default LogoutButton;
