import { Box, IconButton, VStack } from "@chakra-ui/react";
import { DeleteIcon, EditIcon } from "@chakra-ui/icons";

import React from "react";
import { useTaskStore } from "../store/task";

const TaskCard = ({ task }) => {
  const { deleteTask } = useTaskStore();

  const handleDeleteTask = async (tid) => {
    const { success, message } = await deleteTask(tid);
  };
  return (
    <VStack spacing="14px">
      <Box
        w="full"
        h="60px"
        bg="blue.700"
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        p={3}
      >
        <span>{task.task}</span>
        <div>
          <IconButton
            icon={<EditIcon />}
            aria-label="Edit Task"
            colorScheme="blue"
          />
          <IconButton
            icon={<DeleteIcon />}
            aria-label="Delete Task"
            onClick={() => handleDeleteTask(task._id)}
            colorScheme="red"
          />
        </div>
      </Box>
    </VStack>
  );
};

export default TaskCard;
