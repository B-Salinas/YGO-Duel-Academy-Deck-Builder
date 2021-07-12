import React from 'react';
import {
    Text,
    Box,
    Grid,
    Heading,
} from "@chakra-ui/react";
import { useSelector } from 'react-redux';


export default function DeckNav () {

    const user = useSelector((state) => state.session.user)
    const current_deck = useSelector((state) => state.deckbuilder.current_deck)

    const monster_card_low_levels = () => {
        const user_monster_cards = user.monster_cards
        const low_level = user_monster_cards.query.filter(user_monster_cards.level == Range(1,5))
        return low_level 
    }


    return user && current_deck && (
        <>
            <Box>
                <Grid templateColumns="repeat(3, 1fr)" gap={6}>
                    <Box align="center" >
                        <Heading> Trunk </Heading>
                    </Box>
                    <Grid templateColumns="repeat(3, 1fr)" gap={6} align="center" >
                        <Text> Main </Text>
                        <Text> Fusion </Text>
                        <Text> Side </Text>
                    </Grid>
                    <Box align="center" >
                        <Heading color="red.400">
                            {current_deck.name}
                        </Heading>
                    </Box>
                </Grid>

                <br />

                <Grid templateColumns="repeat(3, 1fr)" gap={2} bg="gray.100" h={100} align="center">
                    <Box align="center" h={50} mt={5}>
                        <strong> Trunk Cards </strong> 
                        <br /> 
                        <Heading size="md"> {Object.keys(user.trunk_cards).length} </Heading>
                    </Box>

                    <Grid templateColumns="repeat(9, 1fr)" gap={2} align="center" justify="center" mt={3} h={75} bg="gray.400">
                        
                        <Box>
                            <Grid templateColumns="repeat(3, 1fr)" gap={2} mt={3} ml={7} h={50} align="center" bg="gray.500">
                                <Box w={100} bg="white"> 1-4 </Box>
                                <Box w={100} bg="white"> 5-6 </Box>
                                <Box w={100} bg="white"> 7+ </Box>
                            </Grid>
                        </Box>

                        <Box>
                            <Grid templateColumns="repeat(6, 1fr)" gap={2} mt={3} h={50} align="center" bg="gray.500">
                                <Box w={100} bg="white"> Spell </Box>
                                <Box w={100} bg="white"> Trap </Box>
                                <Box w={100} bg="white"> Normal </Box>
                                <Box w={100} bg="white"> Effect </Box>
                                <Box w={100} bg="white"> Fusion </Box>
                                <Box w={100} bg="white"> Ritual </Box>
                            </Grid>
                        </Box>
                    </Grid>

                    <Box align="center" h={50} mt={45} >
                        <Heading size="xs"> Current Sorting Method </Heading>
                    </Box>
                </Grid>

                

            </Box>
            
        </>
    )
}