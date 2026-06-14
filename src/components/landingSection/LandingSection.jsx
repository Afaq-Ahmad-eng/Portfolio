import {
  Box,
  Flex,
  Heading,
  Image,
  VStack,
  Button,
  Link as ChakraLink,
} from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import FullScreenSection from "../fullScreenSection/FullScreenSection";
import picture from "../../assets/images/IMG_0210.jpg"
import style from "./LandingSection.module.css"
const bio1 = "Hi, I’m Afaq Ahmad - Software Developer";
const bio2 = [
  "Build full-stack web applications using React, Node.js, and Express",
  "Develop REST APIs with authentication, validation, and role-based access",
  "Write modular, maintainable code with basic scalability in mind"
];

// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const LandingSection = () => {
  return (
    <FullScreenSection
      justifyContent="center"
      alignItems="center"
      isDarkBackground
      backgroundColor="#18181b" // 60% Dominant Background
      // FIX 1: Replaced py=0 on desktop with defensive padding so content never hugs the screen edges
      py={{ base: 20, md: 24 }} 
    >
      <Box 
        width="100%" 
        maxW="container.xl" 
        // Horizontal padding remains fluidly scaled to prevent layout overflow
        px={{ base: 6, sm: 8, md: 12 }} 
        boxSizing="border-box"
      >
        <Flex
          flexDirection={{ base: "column-reverse", md: "row" }}
          width="100%"
          // FIX 2: Controlled layout gap ensures spatial comfort during element wrapping
          gap={{ base: 12, md: 16 }}
          justifyContent="space-between"
          alignItems="center"
        >
          {/* LEFT SIDE: BIO TEXT */}
          <VStack
            alignItems={{ base: "center", md: "flex-start" }}
            textAlign={{ base: "center", md: "left" }}
            spacing={6}
            flex="1"
            width="100%"
          >
            <Heading as="h1" size={{ base: "xl", md: "2xl" }} color="white">
              {bio1}
            </Heading>
            
            <VStack spacing={3} align={{ base: "center", md: "flex-start" }}>
              {bio2.map((line, index) => (
                <Heading
                  key={index}
                  as="h2"
                  size={{ base: "md", md: "lg" }}
                  fontWeight="medium"
                  color="gray.300" // 30% Secondary sub-text
                >
                  {line}
                </Heading>
              ))}
            </VStack>
          </VStack>

          {/* RIGHT SIDE: IMAGE & ACCENT CV BUTTON */}
          <VStack 
            spacing={6} 
            flex="1" 
            alignItems="center" 
            justifyContent="center"
            width="100%"
          >
            <Image
              src={picture}
              alt="Afaq Ahmad"
              objectFit="cover"
              width={{ base: "60%", sm: "45%", md: "75%" }}
              maxW="300px" // Slightly optimized max bounds to balance text hierarchy weight
              aspectRatio="1/1"
              borderRadius={{ base: "full", md: "2xl" }}
              boxShadow="2xl"
              border="4px solid"
              borderColor="#2A4365" // 30% Structural Slate Blue
            />

            {/* 10% ACCENT: PREMIUM PURPLE DOWNLOAD CALL-TO-ACTION */}
            <ChakraLink
              href="/AFAQ-AHMAD-CV.pdf"
              isExternal
              download
              _hover={{ textDecoration: "none" }}
              width={{ base: "60%", sm: "45%", md: "75%" }}
              maxW="300px"
            >
              <Button
                leftIcon={<FontAwesomeIcon icon={faDownload} size="sm" />}
                bg="#512DA8" // 10% Accent Purple
                color="white"
                size="lg"
                width="100%"
                borderRadius="lg"
                boxShadow="lg"
                _hover={{ bg: "#43258E", transform: "translateY(-2px)" }}
                _active={{ bg: "#341B75" }}
                transition="all 0.2s ease-in-out"
              >
                Download CV
              </Button>
            </ChakraLink>
          </VStack>
        </Flex>
      </Box>
    </FullScreenSection>
  );
};

export default LandingSection;