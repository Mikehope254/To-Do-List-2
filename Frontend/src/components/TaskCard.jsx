import { Box, VStack } from "@chakra-ui/react";
import React from "react";

const TaskCard = () => {
  return (
    <VStack spacing="14px">
      <Box w="full" h="60px" bg="yellow.200">
        1
      </Box>
      <Box w="40px" h="40px" bg="tomato">
        2
      </Box>
      <Box w="40px" h="40px" bg="pink.100">
        3
      </Box>
    </VStack>
  );
};

export default TaskCard;
