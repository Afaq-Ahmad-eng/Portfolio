import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Coursera from "../../assets/Coursera.png";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
// Add faBriefcase (or faCode) and faEnvelope here:
import { faBriefcase, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { Box, HStack, Link as ChakraLink } from "@chakra-ui/react";

const socials = [
  { icon: faGithub, type: "fa", url: "https://github.com/Afaq-Ahmad-eng" },
  {
    icon: faLinkedin,
    type: "fa",
    url: "https://www.linkedin.com/in/afaq-ahmad-ali",
  },
  {
    icon: Coursera,
    type: "img",
    url: "https://www.coursera.org/learner/afaq-ahmad-eng",
  },
];

const Header = () => {
  const handleClick = (anchor) => () => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <Box
      position="sticky"
      top={0}
      left={0}
      right={0}
      width="100%"
      backgroundColor="#18181b" // 60% Dominant Theme Background
      zIndex={1000}
      borderBottom="1px solid" 
      borderColor="#2A4365" // 30% Structural Slate Blue border for separation
    >
      <Box color="white" maxWidth="1280px" margin="0 auto" width="100%">
        <HStack
          width="100%"
          flexDirection="row"
          justifyContent="space-between"
          alignItems="center"
          py={{ base: 6, md: 4 }} // Tighter vertical mobile padding to look clean
          px={{ base: 4, sm: 10, md: 20 }} 
          spacing={{ base: 2, sm: 4 }}
        >
          {/* LEFT SIDE: SOCIAL ICONS */}
          <nav>
            <HStack spacing={{ base: 4, sm: 5 }}>
              {socials.map((social, index) => (
                <ChakraLink
                  key={index}
                  href={social.url}
                  isExternal
                  color="white"
                  // Accent hover color transition loop
                  _hover={{ color: "#978bb3", transform: "scale(1.08)" }}
                  transition="all 0.2s ease-in-out"
                  display="flex"
                  alignItems="center"
                >
                  {social.type === "fa" ? (
                    <FontAwesomeIcon icon={social.icon} size="lg" />
                  ) : (
                    <img
                      src={social.icon}
                      alt="Social Link"
                      style={{ 
                        width: "24px", 
                        height: "24px", 
                        objectFit: "contain",
                        filter: "brightness(1)"
                      }}
                    />
                  )}
                </ChakraLink>
              ))}
            </HStack>
          </nav>

          {/* RIGHT SIDE: NAVIGATION LINKS */}
          <nav>
            <HStack spacing={{ base: 6, md: 12 }}>
              
              {/* PROJECTS LINK */}
              <ChakraLink 
                onClick={handleClick("projects")} 
                fontWeight="semibold"
                color="white"
                _hover={{ textDecoration: "none", color: "#978bb3" }}
                transition="color 0.2s ease-in-out"
                display="flex"
                alignItems="center"
              >
                <Box as="span" display={{ base: "inline", md: "none" }}>
                  <FontAwesomeIcon icon={faBriefcase} size="lg" />
                </Box>
                <Box as="span" display={{ base: "none", md: "inline" }}>
                  Projects
                </Box>
              </ChakraLink>
              
              {/* CONTACT LINK */}
              <ChakraLink 
                onClick={handleClick("contactme")} 
                fontWeight="semibold"
                color="white"
                _hover={{ textDecoration: "none", color: "#978bb3" }}
                transition="color 0.2s ease-in-out"
                display="flex"
                alignItems="center"
              >
                <Box as="span" display={{ base: "inline", md: "none" }}>
                  <FontAwesomeIcon icon={faEnvelope} size="lg" />
                </Box>
                <Box as="span" display={{ base: "none", md: "inline" }}>
                  Contact Me
                </Box>
              </ChakraLink>

            </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
  );
};

export default Header;
