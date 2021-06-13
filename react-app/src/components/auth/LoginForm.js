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
  Button,
  isRequired,
  Flex
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
        <VStack spacing={2}>
          <FormControl isRequired>
      
            <FormLabel>Email address</FormLabel>
            <Input
              placeholder="Email Address"
              type="email"
              value={email}
              onChange={updateEmail}
            />

            <FormLabel>Password</FormLabel>
            <Input
              placeholder="Password"
              type="password"
              value={password}
              onChange={updatePassword}
            />

            <Flex
              align={"right"}
              justify={"right"}
            >
              <Button type="Submit" bg='#0055FF' color='white' _hover={{ bg: '#004de6' }}>Continue</Button>
            </Flex>
          </FormControl>
        </VStack>
      </form>

      <form onSubmit={handleDemo}>
            <Flex
              align={"right"}
              justify={"right"}
            >
              <Button type="Submit" bg='#0055FF' color='white' _hover={{ bg: '#004de6' }}>Guest Duelist</Button>
            </Flex>
      </form>
    </>
  );
};

export default LoginForm;
