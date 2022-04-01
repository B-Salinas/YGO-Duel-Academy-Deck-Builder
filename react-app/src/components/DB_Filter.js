import React from "react";

import {
  Box,
  Flex,
  Grid,
  GridItem,
  Heading,
  HStack,
  SimpleGrid,
} from "@chakra-ui/react";

function DB_Filter({ currentDeck }) {
  return (
    <>
      <Box bg="blue.100">
        <Grid templateColumns="repeat(12, 1fr)" gap={2}>
          <GridItem colSpan={2} h="20" bg="red.100">
            <Box># of Trunk Cards goes here</Box>
          </GridItem>
          <GridItem colSpan={8} bg="green.100">
            <Box>
              <SimpleGrid templateColumns="repeat(8, 1fr)">
                <GridItem>
                  <Box>1-4</Box>
                </GridItem>
                <GridItem>
                  <Box>5-6</Box>
                </GridItem>
                <GridItem>
                  <Box>7+</Box>
                </GridItem>
                <GridItem>
                  <Box> Spell </Box>
                </GridItem>
                <GridItem>
                  <Box> Trap </Box>
                </GridItem>
                <GridItem>
                  <Box> Normal </Box>
                </GridItem>
                <GridItem>
                  <Box> Effect </Box>
                </GridItem>
                <GridItem>
                  <Box> Fusion </Box>
                </GridItem>
                <GridItem>
                  <Box> Ritual </Box>
                </GridItem>
              </SimpleGrid>
            </Box>
          </GridItem>
          <GridItem colSpan={2} bg="red.100">
            <Box>CSM goes here</Box>
          </GridItem>
        </Grid>
      </Box>
    </>
  );
}

export default DB_Filter;

{
  /* 

  <Grid templateColumns="repeat(3, 1fr)" gap={2} bg="gray.100" h={100} align="center" >
    <Box align="center" h={50} mt={5}>
      <strong> Trunk Cards </strong>
      <br />
      <Heading size="md"># of TC</Heading>
    </Box>

    <Grid templateColumns="repeat(9, 1fr)" gap={2} align="center" justify="center" mt={3} h={75} bg="gray.400" >
      <Box>
        <Grid templateColumns="repeat(3, 1fr)" gap={2} mt={3} ml={7} h={50} align="center" bg="gray.500" >
          <Box w={100} bg="white">
            1-4
          </Box>
          <Box w={100} bg="white">
            5-6
          </Box>
          <Box w={100} bg="white">
            7+
          </Box>
        </Grid>
      </Box>

      <Box>
        <Grid templateColumns="repeat(6, 1fr)" gap={2} mt={3} h={50} align="center" bg="gray.500" >
          <Box w={100} bg="white">
            Spell
          </Box>
          <Box w={100} bg="white">
            Trap
          </Box>
          <Box w={100} bg="white">
            Normal
          </Box>
          <Box w={100} bg="white">
            Effect
          </Box>
          <Box w={100} bg="white">
            Fusion
          </Box>
          <Box w={100} bg="white">
            Ritual
          </Box>
        </Grid>
      </Box>
    </Grid>

    <Box align="center" h={50} mt={45}>
      <Heading size="xs"> Current Sorting Method </Heading>
    </Box>
  </Grid>

*/
}
