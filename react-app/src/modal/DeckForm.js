import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from 'react-router-dom';
import { Redirect } from "react-router-dom";
import { login } from "../store/session";

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

const DeckForm = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const user = useSelector(state => state.session.user);

    const [deckName, setDeckName] = useState("");

    const [errors, setErrors] = useState([]);

    if (!user) {
        return <Redirect to="/decklist" />;
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrors([]);
        // const dispatched = await dispatch(login(email, password))

        // if (dispatched.errors) {
        //     setErrors(dispatched.errors)
        // } else {
        //     history.push('/')
        // }
    };

    const updateDeckName = (e) => {
        setDeckName(e.target.value);
    };


    return (
        <>
            <form onSubmit={handleSubmit}>

                <div>
                    {errors.map((error, idx) => <div key={idx}>{error}</div>)}
                </div>

                <VStack spacing="24px">
                    <FormControl isRequired >
                        <FormLabel>Deck Name</FormLabel>
                        <InputGroup>
                            <Input
                                placeholder="Deck Name"
                                type="text"
                                value={deckName}
                                onChange={updateDeckName}
                            />
                        </InputGroup>
                    </FormControl>
                </VStack>
            </form>


        </>
    );
};

export default DeckForm;
