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
<<<<<<< HEAD
        <Button onClick={onLogout} bg='gray.400' color={"black"} w={"750px"} letterSpacing='widest'  type="Submit" _hover={{ bg: "gray.800", color: "white" }}  > LOG OUT </Button>
=======
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
>>>>>>> 82aea66... removed protected routes for the meantime
      </Flex>
    </>
  )
};

export default LogoutButton;
