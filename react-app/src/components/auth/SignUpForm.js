import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";
import { signUp, login } from "../../store/session";
import { getSignUpData } from "../../store/signUp";

import {
  Avatar,
  FormControl,
  FormLabel,
  VStack,
  Input,
  InputGroup,
  Button,
  Flex,
  Box,
  Spacer,
  Select,
  Stack,
  Radio,
  RadioGroup,
} from "@chakra-ui/react";

const SignUpForm = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.session.user);
  const dorms = useSelector((state) => state.signUp.dorms);
  const titles = useSelector((state) => state.signUp.titles);
  const profilePictures = useSelector((state) => state.signUp.profilePictures);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [profilePictureId, setProfilePictureId] = useState("");
  const [titleId, setTitleId] = useState("");
  const [dormId, setDormId] = useState("");

  const [errors, setErrors] = useState([]);

  useEffect(() => {
    if (!user) {
      dispatch(getSignUpData());
    }
  }, []);

  if (user) {
    return <Redirect to="/" />;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password === repeatPassword) {
      setErrors([]);
      const dispatched = await dispatch(signUp({
        name,
        email,
        password,
        profilePictureId: parseInt(profilePictureId, 10),
        titleId,
        dormId
      }));


      if (dispatched.errors) {
        setErrors(dispatched.errors);
      }
    } else {
      setErrors([
        "Confirm Password field must be the same as the Password field",
      ]);
    }
  };

  const demoLogin = () => {
    const email = "demo@aa.io";
    const password = "password";
    dispatch(login(email, password));
  };

  // const handleDemo = async (e) => {
  //   e.preventDefault();
  //   const email = 'demo@aa.io';
  //   const password = 'password'
  //   const dispatched = await dispatch(login(email, password))

  //   if (dispatched.errors) {
  //     setErrors(dispatched.errors)
  //   } else {
  //     history.push('/')
  //   }
  // };

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
          {errors.map((error, idx) => (
            <div key={idx}>{error}</div>
          ))}
        </div>

        <VStack spacing={2}>
          <FormControl isRequired>
            <FormLabel>Full Name</FormLabel>
            <InputGroup>
              <Input
                placeholder="Full Name"
                type="text"
                value={name}
                onChange={updateName}
              />
            </InputGroup>

            <br />

            <FormLabel>Email Address</FormLabel>
            <InputGroup>
              <Input
                placeholder="Email Address"
                type="email"
                value={email}
                onChange={updateEmail}
              />
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

            <br />

            <FormLabel>Confirm Password</FormLabel>
            <InputGroup>
              <Input
                placeholder="Confirm Password"
                type="password"
                value={repeatPassword}
                onChange={updateRepeatPassword}
              />
            </InputGroup>

            <br />

            <FormLabel>Select a Dorm</FormLabel>
            <Select value={dormId} onChange={(e) => { setDormId(e.target.value) }} placeholder="Select a Dorm">
              {dorms && dorms.map((dorm) => <option value={dorm.id}>{dorm.name}</option>)}
            </Select>

            <br />

            <FormLabel>Select a Title</FormLabel>
            <Select value={titleId} onChange={(e) => { setTitleId(e.target.value) }} placeholder="Select a Title">
              {titles && titles.map((title) => <option value={title.id}>{title.name}</option>)}
            </Select>

            <br />

            <FormLabel>Select a Profile Picture</FormLabel>
            {/* <Select placeholder="Select a Profile Picture">
              {profilePictures &&
                profilePictures.map((profilePicture) => (
                  <option>
                    <Avatar src={profilePicture.imgUrl} size="xs" />
                  </option>
                ))}
            </Select> */}
            <RadioGroup onChange={setProfilePictureId} value={profilePictureId}>
              <Stack direction="row">
                {profilePictures &&
                  profilePictures.map((profilePicture) => (
                    <Radio value={String(profilePicture.id)}>
                      <Avatar src={profilePicture.imgUrl} size="md" />
                    </Radio>
                  ))}
              </Stack>
            </RadioGroup>

            <Flex
              align={"right"}
              justify={"right"}
              direction={"row"}
              mt={5}
              ml={2}
              mr={2}
            >
              <Box>
                <Button
                  type="Submit"
                  bg="blue.400"
                  color="white"
                  _hover={{ bg: "blue.600" }}
                >
                  New Game
                </Button>
              </Box>

              <Spacer />

              <Box>
                {/* <form onSubmit={demoLogin}> */}
                <Flex align={"right"} justify={"right"}>
                  <Button
                    onClick={demoLogin}
                    bg="orange.400"
                    color="white"
                    _hover={{ bg: "orange.600" }}
                  >
                    Guest Duelist
                  </Button>
                </Flex>
                {/* </form> */}
              </Box>
            </Flex>
          </FormControl>
        </VStack>
      </form>

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
    </>
  );
};

export default SignUpForm;
