import {
  Heading,
  Card,
  CardBody,
  HStack,
  Image,
  Text,
  VStack,
  Link as ChakraLink,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Cards = ({ title, description, imageSrc, link }) => {
  const isExternal = typeof link === "string" && /^(https?:)?\/\//i.test(link);

  const card = (
    <Card
      cursor={"pointer"}
      borderRadius="lg"
      _hover={{ boxShadow: "lg", transform: "translateY(-4px)" }}
      transition="0.2s"
    >
      <Image src={imageSrc} borderRadius="lg" />
      <CardBody>
        <VStack align="start" bg="white">
          <Heading as="h3" size="md">
            {title}
          </Heading>
          <Text color="gray.600" fontSize="l">
            {description}
          </Text>
          <HStack>
            <Text>See more</Text>
            <FontAwesomeIcon icon={faArrowRight} size="1x" />
          </HStack>
        </VStack>
      </CardBody>
    </Card>
  );

  if (!link) return card;

  return isExternal ? (
    <ChakraLink href={link} isExternal _hover={{ textDecoration: "none" }}>
      {card}
    </ChakraLink>
  ) : (
    <ChakraLink as={RouterLink} to={link} _hover={{ textDecoration: "none" }}>
      {card}
    </ChakraLink>
  );
};

export default Cards;
