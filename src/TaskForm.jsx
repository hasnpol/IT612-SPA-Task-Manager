// TaskForm.jsx
import React, { useState, useEffect } from "react";
import {
  Container,
  Form,
  FormGroup,
  Input,
  Button,
  Collapse,
} from "reactstrap";

export default function TaskForm({ onTaskSubmit, onTaskEdit, editableTask }) {
  const [task, setTask] = useState({
    ownerName: "",
    projectName: "",
    dateDue: "",
    description: "",
  });
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (editableTask) {
      setTask({
        ownerName: editableTask.ownerName,
        projectName: editableTask.projectName,
        dateDue: editableTask.dateDue,
        description: editableTask.description,
      });
    }
  }, [editableTask]);

  const handleSubmit = () => {
    if (!task.ownerName || !task.projectName || !task.dateDue) {
      alert("Please fill out all required fields.");
      return;
    }

    // Save data to JSON file
    const taskData = {
      ownerName: task.ownerName,
      projectName: task.projectName,
      dateDue: task.dateDue,
    };
    const fs = require("fs");

    // Convert taskData to JSON format
    const jsonData = JSON.stringify(taskData);

    // Write to the JSON file
    fs.writeFileSync("./TaskData.json", jsonData);

    // Continue with the existing logic for onTaskSubmit or onTaskEdit
    if (editableTask) {
      onTaskEdit(editableTask.id, task);
    } else {
      onTaskSubmit(task);
    }

    setTask({ ownerName: "", projectName: "", dateDue: "", description: "" });
    setIsOpen(false);
  };

  return (
    <Form>
      <Container>
        <FormGroup>
          <Input
            type="text"
            placeholder="Project Owner"
            value={task.ownerName}
            onChange={(e) => setTask({ ...task, ownerName: e.target.value })}
          />
          <Input
            type="text"
            placeholder="Project Name"
            value={task.projectName}
            onChange={(e) => setTask({ ...task, projectName: e.target.value })}
          />
          <Input
            type="date"
            placeholder="Due Date"
            value={task.dateDue}
            onChange={(e) => setTask({ ...task, dateDue: e.target.value })}
          />
          <Button color="primary" onClick={handleSubmit}>
            {editableTask ? "Edit Task" : "Add Task"}
          </Button>
          {editableTask && (
            <Button
              color="info"
              onClick={() => setIsOpen(!isOpen)}
              className="ml-2"
              style={{ display: "none" }}
            >
              {isOpen ? "Hide Details" : "Show Details"}
            </Button>
          )}
        </FormGroup>

        {editableTask && (
          <Collapse isOpen={isOpen}>
            <Input
              type="textarea"
              placeholder="Description"
              value={task.description}
              onChange={(e) =>
                setTask({ ...task, description: e.target.value })
              }
            />
          </Collapse>
        )}
      </Container>
    </Form>
  );
}
