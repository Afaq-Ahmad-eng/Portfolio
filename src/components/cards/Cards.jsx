import {Heading, Card, CardBody,HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";


const Cards = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return (
    
    <Card borderRadius="lg">
    <Image src={imageSrc} borderRadius="lg"/>
    <CardBody>
    <VStack align="start" bg="white" px="sm">
    <Heading as="h3" size="md">{title}</Heading>
    <Text color={"gray"} fontSize="sm">{description}</Text>
    <HStack>
    <Text>See more</Text>
    <FontAwesomeIcon icon={faArrowRight} size="1x"/>
    </HStack>
    </VStack>
    </CardBody>
    </Card>
  )
};

export default Cards;
