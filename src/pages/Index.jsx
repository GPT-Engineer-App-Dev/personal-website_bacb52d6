import React from "react";
import { Box, VStack, HStack, Heading, Text, Image, Divider, Link, Container } from "@chakra-ui/react";
import { FaImdb, FaTwitter, FaInstagram } from "react-icons/fa";

const Index = () => {
  return (
    <Box bg="gray.100" minH="100vh">
      <Box bg="white" py={8} boxShadow="md">
        <Container maxW="container.lg">
          <Heading as="h1" size="2xl" mb={4}>
            Tom Hanks
          </Heading>
          <Text fontSize="xl" color="gray.500">
            Actor, Filmmaker, Philanthropist
          </Text>
        </Container>
      </Box>

      <Container maxW="container.lg" py={8}>
        <HStack spacing={8} alignItems="flex-start">
          <Image src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx0b20lMjBoYW5rcyUyMHBvcnRyYWl0fGVufDB8fHx8MTcxMzQwOTE4Mnww&ixlib=rb-4.0.3&q=80&w=1080" alt="Tom Hanks" maxW="sm" borderRadius="lg" boxShadow="lg" />
          <VStack align="start" spacing={6}>
            <Text fontSize="lg">Thomas Jeffrey Hanks (born July 9, 1956) is an American actor and filmmaker. Known for both his comedic and dramatic roles, he is one of the most popular and recognizable film stars worldwide, and is regarded as an American cultural icon.</Text>
            <Text fontSize="lg">Hanks's films have grossed more than $4.9 billion in North America and more than $9.96 billion worldwide, making him the fourth-highest-grossing actor in North America.</Text>
            <HStack spacing={4}>
              <Link href="https://www.imdb.com/name/nm0000158/" isExternal>
                <FaImdb size={24} />
              </Link>
              <Link href="https://twitter.com/tomhanks" isExternal>
                <FaTwitter size={24} />
              </Link>
              <Link href="https://www.instagram.com/tomhanks/" isExternal>
                <FaInstagram size={24} />
              </Link>
            </HStack>
          </VStack>
        </HStack>

        <Divider my={12} />

        <VStack align="start" spacing={8}>
          <Heading as="h2" size="xl">
            Notable Films
          </Heading>
          <Text fontSize="lg">Forrest Gump (1994), Cast Away (2000), Saving Private Ryan (1998), Apollo 13 (1995), Toy Story (1995), Philadelphia (1993), Big (1988)</Text>

          <Heading as="h2" size="xl">
            Awards
          </Heading>
          <Text fontSize="lg">2 Academy Awards for Best Actor (Philadelphia, Forrest Gump), 4 other Academy Award nominations, 7 Emmy Awards, 2 Screen Actors Guild Awards, 4 Golden Globe Awards, and more.</Text>
        </VStack>
      </Container>
    </Box>
  );
};

export default Index;
