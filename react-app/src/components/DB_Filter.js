import React from "react";

import {
  Box,
  Center,
  Flex,
  Grid,
  GridItem,
  Heading,
  HStack,
  SimpleGrid,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";

// fix sizing of individual boxes so that the text doesnt look as squished
function DB_Filter({ currentDeck }) {
  return (
    <>
      <Box>
        <Grid templateColumns="repeat(12, 1fr)" gap={2}>
          <GridItem colSpan={2} h="20">
            <Center>
              <Box borderWidth="2px" borderRadius="md" w="70px" h="70px" mt={1}>
                <Center># of TC</Center>
              </Box>
            </Center>
          </GridItem>
          <GridItem colSpan={8}>
            <Box>
              <Wrap
                justify="space-evenly"
                borderWidth="2px"
                borderRadius="xl"
                p={2}
              >
                <WrapItem fontWeight="semibold" letterSpacing={2}>
                  <Flex borderWidth="2px" borderRadius="sm" bg="blue.100">
                    <Box borderWidth="2px" borderRadius="sm" w="70px" h="70px">
                      <Center> 1-4 </Center>
                    </Box>
                    <Box borderWidth="2px" borderRadius="sm" w="70px" h="70px">
                      <Center> 5-6 </Center>
                    </Box>
                    <Box borderWidth="2px" borderRadius="sm" w="70px" h="70px">
                      <Center> 7+ </Center>
                    </Box>
                  </Flex>
                </WrapItem>

                <WrapItem fontWeight="semibold" letterSpacing={2}>
                  <Flex borderWidth="2px" borderRadius="sm" bg="purple.100">
                    <Box borderWidth="2px" borderRadius="sm" w="70px" h="70px">
                      <Center> Spell </Center>
                    </Box>
                    <Box borderWidth="2px" borderRadius="sm" w="70px" h="70px">
                      <Center> Trap </Center>
                    </Box>
                  </Flex>
                </WrapItem>

                <WrapItem fontWeight="semibold" letterSpacing={2}>
                  <Flex borderWidth="2px" borderRadius="sm" bg="green.100">
                    <Box borderWidth="2px" borderRadius="sm" w="70px" h="70px">
                      <Center> Normal </Center>
                    </Box>
                    <Box borderWidth="2px" borderRadius="sm" w="70px" h="70px">
                      <Center> Effect </Center>
                    </Box>
                    <Box borderWidth="2px" borderRadius="sm" w="70px" h="70px">
                      <Center> Fusion </Center>
                    </Box>
                    <Box borderWidth="2px" borderRadius="sm" w="70px" h="70px">
                      <Center> Ritual </Center>
                    </Box>
                  </Flex>
                </WrapItem>
              </Wrap>
            </Box>
          </GridItem>
          <GridItem colSpan={2}>
            <Center>
              <Box borderWidth="2px" borderRadius="md" w="70px" h="70px" mt={1}>
                <Center>CSM</Center>
              </Box>
            </Center>
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
