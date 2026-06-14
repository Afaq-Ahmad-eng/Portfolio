import { Box, Flex, Text } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box 
      backgroundColor="#18181b" // 60% Dominant Theme Background
      borderTop="1px solid"
      borderColor="#2A4365" // 30% Structural Slate Blue dividing line
    >
      <footer>
        <Flex
          margin="0 auto"
          px={{ base: 6, md: 12 }} // Fluid responsive horizontal padding
          justifyContent="center"
          alignItems="center"
          maxWidth="1024px"
          height={20} // Slightly more breathing room for a premium look
        >
          <Text 
            color="gray.200" // Muted contrast tone for supplementary data
            fontSize="sm" 
            justifyContent="center"
            alignItems="center"
            textAlign="center"
            letterSpacing="wider"
          >
            © {new Date().getFullYear()} Afaq Ahmad Ali Khan Kundi. All rights reserved.
          </Text>
        </Flex>
      </footer>
    </Box>
  );
};

export default Footer;