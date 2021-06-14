import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from 'react-router-dom';
import { Redirect } from "react-router-dom";
import { login } from "../../store/session";

import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  VStack,
  Input,
  InputGroup,
  Button,
  isRequired,
  Flex,
  Box,
  Spacer
} from "@chakra-ui/react";

const LoginForm = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const user = useSelector(state => state.session.user);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [errors, setErrors] = useState([]);
  
  if (user) {
    return <Redirect to="/" />;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors([]);
    const dispatched = await dispatch(login(email, password))

    if (dispatched.errors) {
      setErrors(dispatched.errors)
    } else {
      history.push('/')
    }
  };

  const handleDemo = async (e) => {
    e.preventDefault();
    const email = 'demo@aa.io';
    const password = 'password'
    const dispatched = await dispatch(login(email, password))

    if (dispatched.errors) {
      setErrors(dispatched.errors)
    } else {
      history.push('/')
    }
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };  

  return (
    <>
      <form onSubmit={handleSubmit}>
        
        <div>
          {errors.map((error, idx) => <div key={idx}>{error}</div>)}
        </div>

        <VStack spacing="24px">
          <FormControl isRequired >
            <FormLabel>Email Address</FormLabel>
            <InputGroup>
              <Input
                placeholder="Email Address"
                type="email"
                value={email}
                onChange={updateEmail}
              />s
            </InputGroup>
            
            <br />

            <FormLabel>Password</FormLabel>
            <InputGroup>
              <Input
                placeholder="Password"
                type="password"
                value={password}
                onChange={updatePassword}
              />
            </InputGroup>
            

            <Flex align={"right"} justify={"right"} direction={'row'} mt={5} ml={2} mr={2}>

              <Box>
<<<<<<< HEAD
                <Button  type="Submit" bg='blue.400' color='white' _hover={{ bg: 'blue.600' }}>Continue</Button>
=======
                <Button  type="Submit" bg='#0055FF' color='white' _hover={{ bg: '#004de6' }}>Continue</Button>
>>>>>>> a4420d3fdd1f08db677673b30bba58cd78a76630
              </Box>

              <Spacer />

              <Box>
                <form onSubmit={handleDemo}>
                  <Flex align={"right"} justify={"right"} >
<<<<<<< HEAD
                    <Button type="Submit" bg='orange.400' color='white' _hover={{ bg: 'orange.600' }}>Guest Duelist</Button>
=======
                    <Button type="Submit" bg='orange.400' color='white' _hover={{ bg: '#004de6' }}>Guest Duelist</Button>
>>>>>>> a4420d3fdd1f08db677673b30bba58cd78a76630
                  </Flex>
                </form>
              </Box>

            </Flex>
            
          </FormControl>
        </VStack>
      </form>

      
    </>
  );
};

export default LoginForm;
