import React from 'react';
import {
  Box,
  Flex,
  Heading,
  Text,
  Link,
  Stack,
  Button,
  useColorMode,
  IconButton,
  Image,
  useColorModeValue
} from '@chakra-ui/react';
import { FaSun, FaMoon } from 'react-icons/fa';

const App = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const sectionBgColor = useColorModeValue('gray.100', 'gray.700');
  const cardBgColor = useColorModeValue('white', 'gray.800');
  const textColor = useColorModeValue('black', 'white');

  return (
    <Box>
      <Flex as="header" padding="4" justifyContent="space-between" alignItems="center">
        <Flex alignItems="center">
          <Image
            borderRadius="full"
            boxSize="100px"
            src="https://media.licdn.com/dms/image/D4D03AQFPd3aEw8AkmA/profile-displayphoto-shrink_200_200/0/1696931754725?e=2147483647&v=beta&t=VJJSqnLpa0iJxfm9Gn4fyGTKGRYtSpZCWUYdIcDX0uM"
            alt="Profile Picture"
            marginRight="4"
          />
          <Heading as="h1" size="lg" marginRight="4">
            Luiz Gabriel Wojtovicz
          </Heading>
        </Flex>
        <Flex>
          <Button as="a" href="#about" variant="link" marginRight="4">
            Sobre
          </Button>
          <Button as="a" href="#projects" variant="link" marginRight="4">
            Projetos
          </Button>
          <Button as="a" href="#contact" variant="link">
            Contato
          </Button>
          <IconButton
            ml="4"
            onClick={toggleColorMode}
            icon={colorMode === 'light' ? <FaMoon /> : <FaSun />}
            aria-label="Toggle Color Mode"
          />
        </Flex>
      </Flex>

      <Box as="section" id="about" padding="8">
        <Heading as="h2" size="xl" mb="4">Sobre Mim</Heading>
        <Text>Olá! Sou um desenvolvedor apaixonado por tecnologia e inovação. Tenho experiência em desenvolvimento web, data engineering, e data science.</Text>
      </Box>

      <Box as="section" id="projects" padding="8" bg={sectionBgColor}>
        <Heading as="h2" size="xl" mb="4" color={textColor}>Projetos</Heading>
        <Stack spacing="4">
          <Box padding="4" bg={cardBgColor} borderRadius="md" shadow="md">
            <Heading as="h3" size="md" color={textColor}>Projeto 1</Heading>
            <Text color={textColor}>Descrição do projeto 1.</Text>
          </Box>
          <Box padding="4" bg={cardBgColor} borderRadius="md" shadow="md">
            <Heading as="h3" size="md" color={textColor}>Projeto 2</Heading>
            <Text color={textColor}>Descrição do projeto 2.</Text>
          </Box>
        </Stack>
      </Box>

      <Box as="section" id="contact" padding="8">
        <Heading as="h2" size="xl" mb="4">Contato</Heading>
        <Text>Email: <Link href="mailto:email@example.com">email@example.com</Link></Text>
      </Box>

      <Box as="footer" padding="4" bg="gray.800" color="white" textAlign="center">
        <Text>&copy; 2024 Meu Portfólio. Todos os direitos reservados.</Text>
      </Box>
    </Box>
  );
};

export default App;
