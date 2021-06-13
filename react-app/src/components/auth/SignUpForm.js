import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux"
import { Redirect } from 'react-router-dom';
import { signUp } from '../../store/session';

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

const SignUpForm = () => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.session.user);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  
  const [errors, setErrors] = useState([]);

  if (user) {
    return <Redirect to="/" />;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password === repeatPassword) {
      setErrors([]);
      const dispatched = await dispatch(signUp({name, email, password}))
      
      if (dispatched.errors) {
        setErrors(dispatched.errors)
      }
      
    } else {
      setErrors(['Confirm Password field must be the same as the Password field']);
    }
  }

  const updateName = (e) => {
    setName(e.target.value);
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const updateRepeatPassword = (e) => {
    setRepeatPassword(e.target.value);
  };

  return (

    <>
        <form onSubmit={handleSubmit}>
          <div>
            {errors.map((error, idx) => <div key={idx}>{error}</div>)}
          </div>

          <VStack spacing={2}>
            <FormControl isRequired>
              <FormLabel>Full Name</FormLabel>
              <Input
                placeholder="Full Name"
                type="text"
                value={name} 
                onChange={updateName}
              />

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

              <FormLabel>Confirm Password</FormLabel>
              <Input
                placeholder="Confirm Password"
                type="password"
                value={repeatPassword}
                onChange={updateRepeatPassword}
              />

              <Flex
                align={"right"}
                justify={"right"}
              >
                <Button type="Submit" bg='#0055FF' color='white' _hover={{ bg: '#004de6' }}>New Game</Button>
              </Flex>
            </FormControl>
          </VStack>
        </form>
    </>
  );
};

export default SignUpForm;




{/* <form onSubmit={handleSubmit}>
  <div> {errors.map((error, idx) => <span key={idx}>{error}</span>)}</div>

  <div>
    <label>Name</label>
    <input
      type="text"
      name="name"
      onChange={updateName}
      value={name}
    ></input>
  </div>

  <div>
    <label>Email</label>
    <input
      type="text"
      name="email"
      onChange={updateEmail}
      value={email}
    ></input>
  </div>

  <div>
    <label>Password</label>
    <input
      type="password"
      name="password"
      onChange={updatePassword}
      value={password}
    ></input>
  </div>

  <div>
    <label>Repeat Password</label>
    <input
      type="password"
      name="repeat_password"
      onChange={updateRepeatPassword}
      value={repeatPassword}
      required={true}
    ></input>
  </div>

  <button type="submit">Sign Up</button>

</form> */}
