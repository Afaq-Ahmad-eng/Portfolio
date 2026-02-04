import { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { Box, HStack } from "@chakra-ui/react";

const socials = [
  // {
  //   icon: faEnvelope,
  //   url: "mailto:afaqahmad2593@gmail.com",
  // },
  {
    icon: faGithub,
    url: "https://github.com/Afaq-Ahmad-eng",
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com/in/afaq-ahmad-6065b3339",
  },
];

const Header = () => {
  const headerRef = useRef(null);
  const prevScrollY = useRef(window.scrollY);

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

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const headerElement = headerRef.current;

      if (currentScrollY > prevScrollY.current) {
        headerElement.style.transform = "translateY(-200px)";
      } else {
        headerElement.style.transform = "translateY(0)";
      }
      
      prevScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Box
      ref={headerRef}
      position="fixed"
      top={0}
      left={0}
      right={0}
      transitionProperty="transform"
      transitionDuration=".3s"
      transitionTimingFunction="ease-in-out"
      backgroundColor="#18181b"
    >
      <Box color="white" maxWidth="1280px" margin="0 auto">
        <HStack
          spacing={6}
          px={20}
          py={4}
          justifyContent="space-between"
          alignItems="center"
        >
          <nav>
            <HStack spacing={4}>
              {socials.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={social.icon} size="lg" />
                </a>
              ))}
            </HStack>
          </nav>
          <nav>
            <HStack spacing={8}>
              <a onClick={handleClick("projects")} style={{ cursor: "pointer" }}>
                Projects
              </a>
              <a onClick={handleClick("contactme")} style={{ cursor: "pointer" }}>
                Contact Me
              </a>
            </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
  );
};

export default Header;