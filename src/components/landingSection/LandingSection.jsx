import { Image, Heading, VStack,HStack } from "@chakra-ui/react";
import FullScreenSection from "../fullScreenSection/FullScreenSection";
import picture from "../../assets/images/IMG_0210.jpg"
const greeting = "Hello, I am Afaq Ahmad!";
const bio1 = "Hi, I’m Afaq Ahmad - Software Developer";
const bio2 = [
  "Proficient in React",
  "Experienced with Backend Technologies",
  "Learning Software Testing",
  "Exploring IT Automation with Python"
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
    <HStack spacing={16}>
  <VStack>
  <Heading>{bio1}</Heading>
  <VStack spacing={2}>
  {bio2.map((line,index) => (
    <Heading 
    key={index}
    size="l"
    >{line}</Heading>
  ))}
  </VStack>
  </VStack>
  <Image 
  src={picture} 
  alt="Ali"
  boxSize="300px"
  objectFit="cover"
  borderRadius="lg"
  />
  </HStack>
  </FullScreenSection>
);

export default LandingSection;
