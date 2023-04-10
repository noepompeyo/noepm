import {BsInstagram, BsFacebook, BsTwitter, BsGithub} from 'react-icons/bs'
import { Flex, Heading, VStack, Box, Text, Image, useColorMode, Button, HStack, IconButton, Link, Spacer } from '@chakra-ui/react'

function App() {
  const {colorMode, toggleColorMode} = useColorMode();

  return (
   
  <>
  <VStack w="100%" h="100vh" bg="gray.800" >

  <nav>
    <Box w="100vw" h="40px" bg="orange.300" alignItems="center">
      
    </Box>
  </nav>
  <main>
    <Box width={["300px", "580px"]} mt={4} >
      <Flex borderRadius="8px 8px 0 0" bg="white" p={4}>
        <Box >
          <Box mb={4}>
        <Text fontSize="lg">Noe Pompeyo</Text>
        <Text fontSize="sm" as="b" >@NoePompeyo</Text>

          </Box>
        <Text>Aprendiendo tecnologias para aprender en la web #React #Javascript #ChakraUI</Text>

        </Box>
        <Image
        boxShadow="2xl"
        boxSize='130px'
        src='/noe.jpg'
        objectFit="cover"
        alt='Noe pompeyo'
        borderRadius="16px"
        />
      </Flex>      
        <Box bg="whiteAlpha.900" p={4}>
        <Text>Mexicano, actualmente viviendo en Guadalajara Jalisco, soy autodidacta en aprender tecnologias para crear en la web, y me encantaria compartir mis aprendizajes en las redes sociales</Text>
        <HStack mt={3}> 
          <IconButton variant="outline" icon={<BsInstagram/>}/>
          <IconButton variant="outline" icon={<BsFacebook/>}/>
          <IconButton variant="outline" icon={<BsTwitter/>}/>
          <IconButton variant="outline" icon={<BsGithub/>}/>
        </HStack>
        </Box>
      <Box >
        <Box w="100%" h="50px" bg="orange.300" display="flex" alignItems="center" px={4}>
          <Link color="orange.600" href='noepm.vercel.app' fontSize="1.2rem" fontWeight="bold" fontFamily="monospace">Blog</Link>
          <Spacer/>
          <Text>📖</Text>
        </Box>
      </Box>
     

    </Box>
    
  </main>
  <footer>
    <Box>hola </Box>
  </footer>
  </VStack>
  </>
  )
}

export default App
