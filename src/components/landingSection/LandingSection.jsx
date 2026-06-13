import { Flex, Image, Heading, VStack,HStack, Box } from "@chakra-ui/react";
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
const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >
    <Box 
      width="100%" 
      p='2'
      boxSize="border-box"   
    >
    <Flex
      // 1. FIXED: Row on desktop, vertical column on mobile screens
      flexDirection={{ base: "column-reverse", md: "row" }} 
      
      // 2. FIXED: Changed '100vw' to '100%' to prevent horizontal overflow
      width="100%"
      
      // 3. Spacing controls: spaces items vertically on mobile, horizontally on desktop
      gap={{ base: 8, md: 16 }}
      
      // 4. Centers elements perfectly regardless of layout orientation
      justifyContent="center"
      alignItems="center"
      
      // 5. Horizontal safety padding for smaller screens
      px={{ base: 8, md: 12 }}
      py={{ base: 10, md: 0 }}
    >
      {/* Left Side: Bio Text */}
      <VStack 
        alignItems={{ base: "center", md: "flex-start" }} // Centers text on mobile, left-aligns on desktop
        textAlign={{ base: "center", md: "left" }}
        spacing={4}
      >
        <Heading size="2xl">{bio1}</Heading>
        <VStack spacing={2} align={{ base: "center", md: "flex-start" }}>
          {bio2.map((line, index) => (
            <Heading 
              key={index} 
              size="lg"
              fontWeight="medium"
            >
              {line}
            </Heading>
          ))}
        </VStack>
      </VStack>

      {/* Right Side: Image & CV Button */}
      <VStack spacing={{ base: 8, md: 6 }}>
        <Image 
          src={picture} 
          alt="Ali"
          // FIXED: Scaled image down for tiny mobile viewports so it never overflows
          boxSize={{ base: "220px", sm: "280px", md: "300px" }}
          objectFit="cover"
          borderRadius={{ base: "full", md: "xl" }} // Optional: "full" makes it a clean professional circle avatar
          boxShadow="xl"
        />
        <Box className={style.CvButtonContainer}>
          <a 
            href="/AFAQ-AHMAD-CV.pdf" 
            target="_blank" 
            download
            rel="noopener noreferrer"
            className={style.downloadBtn}
          >
            Download CV
          </a>
        </Box>
      </VStack>
    </Flex>
    </Box>
  </FullScreenSection>
);

export default LandingSection;
