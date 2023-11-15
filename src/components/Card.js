import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return (
    <VStack
      alignItems="flex-start"
      spacing={4}
      p={4}
      borderRadius="lg"
      bgColor="white"
      color="black"
      boxShadow="md"
    >
      <Image src={imageSrc} alt={title} borderRadius="xl" />
      <VStack alignItems="flex-start" spacing={2} w="100%">
        <Heading as="h3" size="md" color="black">
          {title}
        </Heading>
        <Text color="gray.500">{description}</Text>
        <HStack justifyContent="flex-start">
          <Text>See more</Text>
          <FontAwesomeIcon icon={faArrowRight} size="1x" />
        </HStack>
      </VStack>
    </VStack>
  );
};

export default Card;
