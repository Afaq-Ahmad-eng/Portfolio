import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Coursera from "../../assets/Coursera.png";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
// Add faBriefcase (or faCode) and faEnvelope here:
import { faBriefcase, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { Box, HStack } from "@chakra-ui/react";

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
      position="fixed"
      top={0}
      left={0}
      right={0}
      backgroundColor="#18181b"
      zIndex={1000}
      boxShadow="sm"
    >
      <Box color="white" maxWidth="1280px" margin="0 auto" width="100%">
        <HStack
          width="100%" // 1. Crucial: Makes sure the stack stretches across the whole screen width
          flexDirection="row"
          justifyContent="space-between"
          alignItems="center"
          py={4}
          // 2. Controlled responsive padding (tight on mobile, open on desktop)
          px={{ base: 4, sm: 10, md: 20 }} 
          // 3. Single clean spacing property to control unexpected layout shifts
          spacing={{ base: 2, sm: 4 }}
        >
          <nav>
            {/* Tighter spacing for social icons on small screens */}
            <HStack spacing={{ base: 3, sm: 4 }}>
              {socials.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {social.type === "fa" ? (
                    <FontAwesomeIcon icon={social.icon} size="lg" />
                  ) : (
                    <img
                      src={social.icon}
                      alt="Coursera"
                      style={{ width: "30px", height: "auto" }}
                    />
                  )}
                </a>
              ))}
            </HStack>
          </nav>

          <nav>
            {/* Adjusted base spacing so icons don't drift or clash on narrow viewports */}
            <HStack spacing={{ base: 5, md: 12 }}>
              <a onClick={handleClick("projects")} style={{ cursor: "pointer" }}>
                <Box as="span" display={{ base: "inline", md: "none" }}>
                  <FontAwesomeIcon icon={faBriefcase} size="lg" />
                </Box>
                <Box as="span" display={{ base: "none", md: "inline" }}>
                  Projects
                </Box>
              </a>
              
              <a onClick={handleClick("contactme")} style={{ cursor: "pointer" }}>
                <Box as="span" display={{ base: "inline", md: "none" }}>
                  <FontAwesomeIcon icon={faEnvelope} size="lg" />
                </Box>
                <Box as="span" display={{ base: "none", md: "inline" }}>
                  Contact Me
                </Box>
              </a>
            </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
  );
};

export default Header;
