import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom"
import {addOneDeck} from '../store/deck'

// import { useHistory } from 'react-router-dom';
import { Redirect } from "react-router-dom";

import {
    FormControl,
    FormLabel,
    VStack,
    Input,
    InputGroup,
} from "@chakra-ui/react";

const DeckForm = () => {
    const dispatch = useDispatch();
    // const history = useHistory();
    const user = useSelector(state => state?.session?.user);
    

    const { id } = useParams()

    const [deckName, setDeckName] = useState("");
    const [errors, setErrors] = useState([]);

    if (!user) {
        return <Redirect to="/" />;
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        const newDeckFormData = {
            deckName,
            user_id: id
        }

        dispatch(addOneDeck(newDeckFormData))
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
