import {
  Heading,
  Card,
  CardBody,
  HStack,
  Image,
  Text,
  VStack,
  Link as ChakraLink,
  IconButton,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Box,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Cards = ({ title, description, imageSrc, link }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const isExternal = typeof link === "string" && /^(https?:)?\/\//i.test(link);

  const handleIconClick = (e) => {
    e.stopPropagation(); // Prevents opening the modal when clicking the arrow link icon
  };

  return (
    <>
      {/* CARD INTERFACE */}
      <Card
        onClick={onOpen}
        cursor="pointer"
        borderRadius="lg"
        backgroundColor="#2A4365" // 30% Secondary (Slate Blue)
        overflow="hidden"
        _hover={{ boxShadow: "xl", transform: "translateY(-6px)" }}
        transition="all 0.25s ease-in-out"
        height="100%"
        role="group"
      >
        <Image 
          src={imageSrc} 
          alt={title} 
          objectFit="cover" 
          height="200px" 
          width="100%"
        />
        <CardBody>
          <VStack align="start" spacing={3} height="100%">
            <Heading as="h3" color="white" size="md">
              {title}
            </Heading>
            
            <Text color="gray.200" fontSize="md" noOfLines={3} flexGrow={1}>
              {description}
            </Text>
            
            <HStack 
              width="100%" 
              justifyContent="space-between" 
              alignItems="center" 
              pt={2}
            >
              <Text 
                color="gray.200" 
                fontWeight="semibold" 
                lineHeight="1"
                _groupHover={{ color: "#978bb3" }}
                transition="0.2s"
              >
                See more
              </Text>

              {link ? (
                isExternal ? (
                  <ChakraLink 
                    href={link} 
                    isExternal 
                    onClick={handleIconClick}
                    _hover={{ textDecoration: "none" }}
                  >
                    <IconButton
                      aria-label="View Project External Link"
                      icon={<FontAwesomeIcon icon={faArrowRight} size="sm" />}
                      size="xs"
                      bg="#512DA8" // 10% Accent (Purple)
                      color="white"
                      _hover={{ bg: "#43258E" }}
                      _active={{ bg: "#341B75" }}
                    />
                  </ChakraLink>
                ) : (
                  <ChakraLink 
                    as={RouterLink} 
                    to={link} 
                    onClick={handleIconClick}
                    _hover={{ textDecoration: "none" }}
                  >
                    <IconButton
                      aria-label="View Project Route Link"
                      icon={<FontAwesomeIcon icon={faArrowRight} size="sm" />}
                      size="xs"
                      bg="#512DA8" // 10% Accent (Purple)
                      color="white"
                      _hover={{ bg: "#43258E" }}
                      _active={{ bg: "#341B75" }}
                    />
                  </ChakraLink>
                )
              ) : (
                <FontAwesomeIcon color="#E5E7EB" icon={faArrowRight} size="sm" />
              )}
            </HStack>
          </VStack>
        </CardBody>
      </Card>

      {/* FULLSCREEN POPUP MODAL */}
      <Modal 
        isOpen={isOpen} 
        onClose={onClose} 
        isCentered 
        size={{ base: "xs", sm: "md", md: "xl", lg: "2xl" }}
        closeOnOverlayClick={true}
      >
        {/* Backdrop overlay blurs out the 60% background (#18181b) */}
        <ModalOverlay bg="blackAlpha.800" backdropFilter="blur(6px)" />
        <ModalContent 
          backgroundColor="#2A4365" // Matches the structural Slate Blue
          color="white" 
          borderRadius="xl" 
          overflow="hidden"
          mx={4} // Prevents clipping on narrow mobile screens
        >
          {/* HIGH VISIBILITY CLOSE BUTTON BACKDROP CONTAINER */}
          <Box
            position="absolute"
            top="12px"
            right="12px"
            zIndex="skipLink" // Guarantees button stays on top of the image container layer
            bg="blackAlpha.600"
            backdropFilter="blur(4px)"
            borderRadius="full"
            w="32px"
            h="32px"
            display="flex"
            alignItems="center"
            justifyContent="center"
            transition="0.2s"
            _hover={{ bg: "#18181b" }}
          >
            <ModalCloseButton 
              position="static" // Removes native absolute positioning inside the box
              color="white" 
              size="sm"
              w="100%"
              h="100%"
              borderRadius="full"
              _hover={{ bg: "transparent" }} // Handled by parent box wrapper instead
            />
          </Box>
          
          {/* PROJECT IMAGE HEADER CONTAINER */}
          <Box width="100%" height={{ base: "180px", sm: "240px", md: "350px" }} overflow="hidden">
            <Image src={imageSrc} alt={title} objectFit="cover" width="100%" height="100%" />
          </Box>
          
          <ModalHeader fontSize={{ base: "xl", md: "2xl" }} fontWeight="bold" pt={5}>
            {title}
          </ModalHeader>
          
          <ModalBody pb={6}>
            <Text color="gray.200" fontSize="md" lineHeight="relaxed">
              {description}
            </Text>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Cards;