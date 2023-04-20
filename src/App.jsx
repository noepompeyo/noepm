import { BsInstagram, BsFacebook, BsTwitter, BsGithub } from "react-icons/bs";
import {
  Flex,
  VStack,
  Box,
  Text,
  Image,
  HStack,
  IconButton,
  Link,
  Spacer,
} from "@chakra-ui/react";

function App() {
  return (
    <>
    
      <VStack w="100%" h="100vh" bg="gray.800">
        <nav>
          <Box w="100vw" h="40px" bg="orange.300" alignItems="center"></Box>
        </nav>
        <main>
          <Box width={["300px", "580px"]} mt={4}>
            <Flex borderRadius="16px 16px 0 0" bg="white" p={4}>
              <Box>
                <Box mb={4}>
                  <Text fontSize="2xl" color="black" fontFamily='monospace'>
                    Noe Pompeyo
                  </Text>
                  <Text fontSize="sm" as="b" color="black" >
                    @NoePompeyo
                  </Text>
                </Box>
                <Text color="black"  fontWeight='semibold'>
                  Aprendiendo tecnologias para aprender en la web #React
                  #Javascript #ChakraUI
                </Text>
              </Box>
              <Image
                boxShadow="2xl"
                boxSize="130px"
                src="https://github.com/noepompeyo/noepm/blob/main/public/noepompeyo.png?raw=true"
                objectFit="cover"
                alt="Noe pompeyo"
                borderRadius="16px"
              />
            </Flex>
            <Box bg="whiteAlpha.900" p={4}>
              <Text color="black" fontFamily='heading'>
                Mexicano, actualmente viviendo en Guadalajara Jalisco, soy
                autodidacta en aprender tecnologias para crear en la web, y me
                encantaria compartir mis aprendizajes en las redes sociales.
              </Text>
              <HStack mt={3}>
                <Link as="span" href="https://www.instagram.com/noe_pompeyo/">
                  <IconButton
                    fontSize="2xl"
                    variant="outline"
                    color="gray.400"
                    icon={<BsInstagram />}
                    _hover={{ color: "pink.600" }}
                  />
                </Link>
                <Link
                  as="span"
                  href="https://www.facebook.com/profile.php?id=100070381551144"
                >
                  <IconButton
                    fontSize="2xl"
                    variant="outline"
                    color="gray.400"
                    icon={<BsFacebook />}
                    _hover={{ color: "blue.500" }}
                  />
                </Link>
                <Link as="span" href="https://twitter.com/NoePompeyo">
                  <IconButton
                    fontSize="2xl"
                    variant="outline"
                    color="gray.400"
                    icon={<BsTwitter />}
                    _hover={{ color: "cyan.400" }}
                  />
                </Link>
                <Link as="span" href="https://github.com/noepompeyo">
                  <IconButton
                    fontSize="2xl"
                    variant="outline"
                    color="gray.400"
                    icon={<BsGithub />}
                    _hover={{ color: "gray.600" }}
                  />
                </Link>
              </HStack>
            </Box>
            <Box>
              <Box
                as="aside"
                w="100%"
                h="60px"
                bg="orange.200"
                display="flex"
                alignItems="center"
                px={4}
                borderRadius="0 0 16px 16px"
              >
                <Link
                  color="orange.500"
                  href="https://noepm.vercel.app"
                  fontSize="1.2rem"
                  fontWeight="bold"
                  fontFamily="monospace"
                  _hover={{ color: "orange.700" }}
                  textDecoration="none"
                >
                  Blog
                </Link>
                <Spacer />
                <Text>📖</Text>
              </Box>
            </Box>
          </Box>
        </main>
        <footer>
          <Box as="footer" mt={["48px", "180px"]}>
            {" "}
            <Text color="white">Noepm 2023 👩‍🚀 Nice To </Text>
          </Box>
        </footer>
      </VStack>
    </>
  );
}

export default App;
