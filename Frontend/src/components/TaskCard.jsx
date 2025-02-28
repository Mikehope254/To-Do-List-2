import { Box, Checkbox, IconButton, VStack } from "@chakra-ui/react";
import { DeleteIcon, EditIcon } from "@chakra-ui/icons";

import React from "react";
import { useTaskStore } from "../store/task";

const TaskCard = ({ task }) => {
  const { deleteTask, updateTaskCompletion } = useTaskStore();

  const handleDeleteTask = async (tid) => {
    const { success, message } = await deleteTask(tid);
  };

  const handleCheckboxChange = async () => {
    await updateTaskCompletion(task._id, !task.completed);
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
        <Checkbox
          isChecked={Boolean(task.completed)}
          onChange={handleCheckboxChange}
        ></Checkbox>
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
