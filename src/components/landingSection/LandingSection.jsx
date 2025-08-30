import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "../fullScreenSection/FullScreenSection";
import picture from "../../assets/images/IMG_0210.jpg"
const greeting = "Hello, I am Afaq Ahmad!";
const bio1 = "A frontend developer";
const bio2 = "specialised in React";

// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >
   <Avatar name="Afaq Ahmad" src={picture} size="xl"/>
  <VStack>
  <Heading>{bio1}</Heading>
  <Heading>{bio2}</Heading>
  </VStack>
  </FullScreenSection>
);

export default LandingSection;
