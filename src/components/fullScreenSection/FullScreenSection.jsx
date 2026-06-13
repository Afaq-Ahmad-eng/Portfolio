import { VStack } from "@chakra-ui/react";

/**
 * Illustrates the use of children prop and spread operator
 */
const FullScreenSection = ({ children, isDarkBackground, ...boxProps }) => {
  return (
    <VStack
      backgroundColor={boxProps.backgroundColor}
      color={isDarkBackground ? "white" : "black"}
      width="100%"
    >
      <VStack 
        maxWidth="1280px" 
        minHeight="100vh" 
        width="100%"
        px={{ base: 4, sm: 6, md: 8, lg: 12 }}
        {...boxProps}
      >
        {children}
      </VStack>
    </VStack>
  );
};

export default FullScreenSection;
