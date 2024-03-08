// TaskForm.jsx
import React, { useState } from "react";
import { Container, Form, FormGroup, Input, Button } from "reactstrap";

export default function TaskForm({ onTaskSubmit }) {
  const [task, setTask] = useState({
    ownerName: "",
    projectName: "",
    dateDue: "",
  });

  const handleSubmit = () => {
    if (!task.ownerName || !task.projectName || !task.dateDue) {
      alert("Please fill out all required fields.");
      return;
    }

    // Save data to local storage
    const taskData = {
      ownerName: task.ownerName,
      projectName: task.projectName,
      dateDue: task.dateDue,
    };

    // Convert taskData to JSON format
    const jsonData = JSON.stringify(taskData);

    try {
      // Write to local storage
      localStorage.setItem("TaskData", jsonData);
      onTaskSubmit(task);
      // Reset the form
      setTask({ ownerName: "", projectName: "", dateDue: "", description: "" });
    } catch (error) {
      console.error("Error saving data:", error.message);
      // Handle error, e.g., display an error message to the user
    }
  };

  return (
    <Form>
      <Container>
        <FormGroup>
          <Input
            type="text"
            placeholder="Project Owner"
            value={task.ownerName}
            onChange={(e) =>
              setTask((prevTask) => ({
                ...prevTask,
                ownerName: e.target.value,
              }))
            }
          />
          <Input
            type="text"
            placeholder="Project Name"
            value={task.projectName}
            onChange={(e) =>
              setTask((prevTask) => ({
                ...prevTask,
                projectName: e.target.value,
              }))
            }
          />
          <Input
            type="date"
            placeholder="Due Date"
            value={task.dateDue}
            onChange={(e) =>
              setTask((prevTask) => ({ ...prevTask, dateDue: e.target.value }))
            }
          />
          <Button color="primary" onClick={handleSubmit}>
            Add Task
          </Button>
        </FormGroup>
      </Container>
    </Form>
  );
}
