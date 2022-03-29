import React from "react";
import { Box, Flex, Grid, GridItem, Heading, Link } from "@chakra-ui/react";

import { SiLinkedin, SiGithub } from "react-icons/si";

function Footer() {
  const repoLink = "https://github.com/B-Salinas/YGO-Duel-Academy-Deck-Builder";
  const githubLink = "https://github.com/b-salinas";
  const linkedinLink = "https://www.linkedin.com/in/b-salinas/";

  return (
    <>
      <Box bg="gray.100">
        <Grid templateColumns="repeat(12, 1fr)" gap={2}>
          <GridItem w="100%" h="20" />
          <GridItem colSpan={2}>
            <Box align="center" mt={6}>
              <Box>
                <Link
                  isExternal
                  href={githubLink}
                  fontSize="16px"
                  _hover={{ color: "#CC4400", textDecoration: "none" }}
                >
                  About the Developer
                </Link>
              </Box>
            </Box>
          </GridItem>
          <GridItem w="100%" h="20" />
          <GridItem colSpan={4}>
            <Box align="center" mt={7}>
              <Box fontSize="12px">
                © 2021 YGO DA Deck Builder. No rights reserved.
              </Box>
            </Box>
          </GridItem>
          <GridItem w="100%" h="20" />
          <GridItem colSpan={2}>
            <Flex justify="space-evenly" p={5}>
              <Box>
                <Heading as="h2" size="xl">
                  <Link
                    isExternal
                    href={repoLink}
                    _hover={{ color: "#69a74e" }}
                  >
                    <SiGithub />
                  </Link>
                </Heading>
              </Box>
              <Box>
                <Heading as="h2" size="xl">
                  <Link
                    isExternal
                    href={linkedinLink}
                    _hover={{ color: "#1877F2" }}
                  >
                    <SiLinkedin />
                  </Link>
                </Heading>
              </Box>
            </Flex>
          </GridItem>
          <GridItem w="100%" h="20" />
        </Grid>
      </Box>
    </>
  );
}

export default Footer;

{
  /* 
<Flex
  h="60px"
  align="center"
  justify="space-between"
  boxShadow="md"
  p="6"
  rounded="md"
  bg="white"
  py="10px"
  px="80px"
  w="100%"
  pos="fixed"
  bottom="0"
>

<Box fontSize="16px"> © 2021 YGO DA Deck Builder. No rights reserved. </Box>

  <Flex align="center" justify="space-between">
    <Box mr="20px">
      <Link
        href="https://github.com/b-salinas"
        fontSize="16px"
        _hover={{ color: "#CC4400", textDecoration: "none" }}
        isExternal
      >
        {" "}
        About the Developer{" "}
      </Link>
    </Box>

    <Box mr="20px">
      <Heading as="h2" size="xl">
        <Link
          href="https://github.com/B-Salinas/YGO-Duel-Academy-Deck-Builder"
          _hover={{ color: "#69a74e" }}
          isExternal
        >
          <SiGithub />
        </Link>
      </Heading>
    </Box>

    <Box mr="20px">
      <Heading as="h2" size="xl">
        <Link
          href="https://www.linkedin.com/in/b-salinas/"
          _hover={{ color: "#1877F2" }}
          isExternal
        >
          <SiLinkedin />
        </Link>
      </Heading>
    </Box>
  </Flex>
</Flex>; 
*/
}
