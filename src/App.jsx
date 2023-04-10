import {BsInstagram, BsFacebook, BsTwitter, BsGithub} from 'react-icons/bs'
import { Flex, Heading, VStack, Box, Text, Image, useColorMode, Button, HStack, IconButton, Link, Spacer, LinkBox } from '@chakra-ui/react'

function App() {
  

  return (
   
  <>
  <VStack w="100%" h="100vh" bg="gray.800" >

  <nav>
    <Box w="100vw" h="40px" bg="orange.300" alignItems="center">
      
    </Box>
  </nav>
  <main>
    <Box width={["300px", "580px"]} mt={4} >
      <Flex borderRadius="16px 16px 0 0" bg="white" p={4}>
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
        src='https://github.com/noepompeyo/noepm/blob/main/public/noepompeyo.png?raw=true'
        objectFit="cover"
        alt='Noe pompeyo'
        borderRadius="16px"
        />
      </Flex>      
        <Box bg="whiteAlpha.900" p={4}>
        <Text>Mexicano, actualmente viviendo en Guadalajara Jalisco, soy autodidacta en aprender tecnologias para crear en la web, y me encantaria compartir mis aprendizajes en las redes sociales.</Text>
        <HStack mt={3}> 
        <Link href='https://www.instagram.com/noe_pompeyo/'>
          <IconButton fontSize="2xl"  variant="outline" icon={<BsInstagram/>} _hover={{color:"pink.600"}}/>
        </Link>
        <Link href='https://www.facebook.com/profile.php?id=100070381551144'>
          <IconButton fontSize="2xl" variant="outline" icon={<BsFacebook/>}  _hover={{color:"cyan.500"}}/>
        </Link>
        <Link href='https://twitter.com/NoePompeyo'>
          <IconButton fontSize="2xl" variant="outline" icon={<BsTwitter/>}  _hover={{color:"blue.400"}}/>
        </Link>
        <Link href='https://github.com/noepompeyo'>
          <IconButton fontSize="2xl" variant="outline" icon={<BsGithub/>}  _hover={{color:"gray.600"}}/>
        </Link>
        </HStack>
        </Box>
      <Box >
        <Box w="100%" h="60px" bg="orange.200" display="flex" alignItems="center" px={4} borderRadius="0 0 16px 16px">
          <Link color="orange.500" href='https://noepm.vercel.app' fontSize="1.2rem" fontWeight="bold" fontFamily="monospace" _hover={{color:'orange.700'}} textDecoration="none">Blog</Link>
          <Spacer/>
          <Text>📖</Text>
        </Box>
      </Box>
     

    </Box>
    
  </main>
  <footer>
    <Box mt={['48px', '180px']}> <Text color="white">Noepm 2023 👩‍🚀 Nice To  </Text></Box>
  </footer>
  </VStack>
  </>
  )
}

export default App
