// TaskManager.jsx
import React, { useState } from "react";
import {
  Form,
  Button,
  Container,
  ListGroup,
  ListGroupItem,
  Collapse,
} from "reactstrap";
import TaskForm from "./TaskForm";
import "./styles.css";

export default function TaskManager() {
  const [tasks, setTasks] = useState([]);
  const [editableTask, setEditableTask] = useState(null);

  const handleTaskSubmit = (newTask) => {
    setTasks([...tasks, { ...newTask, id: tasks.length, completed: false }]);
  };

  const handleTaskEdit = (taskId, updatedTask) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, ...updatedTask } : task,
    );
    setTasks(updatedTasks);
    setEditableTask(null);
  };

  const handleTaskComplete = (taskId) => {
    const completedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, completed: !task.completed } : task,
    );
    setTasks(completedTasks);
  };

  const handleTaskRemove = (taskId) => {
    const filteredTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(filteredTasks);
  };

  function handleSubmit(e) {
    // Prevent the browser from reloading the page
    e.preventDefault();

    // Read the form data
    const form = e.target;
    const formData = new FormData(form);

    // You can pass formData as a fetch body directly:
    fetch("./TaskForm.json", { method: form.method, body: formData });
  }

  return (
    <Form className="App">
      <h1>Tasks</h1>

      <Container className="TaskFormContainer">
        <TaskForm
          onTaskSubmit={handleTaskSubmit}
          onTaskEdit={handleTaskEdit}
          editableTask={editableTask}
        />

        <ListGroup>
          {tasks.map((task) => (
            <ListGroupItem
              key={task.id}
              className={task.completed ? "completedTask" : ""}
            >
              <div>
                <div>
                  <strong>{task.projectName}</strong> | Due Date: {task.dateDue}
                </div>
                {editableTask && editableTask.id === task.id && (
                  <Button
                    color="info"
                    onClick={() => setEditableTask(null)}
                    style={{ marginRight: "10px" }}
                  >
                    Hide Details
                  </Button>
                )}
                {!editableTask && task.description && (
                  <Button
                    color="info"
                    onClick={() => setEditableTask(task)}
                    style={{ marginRight: "10px" }}
                  >
                    Show Details
                  </Button>
                )}
                |
                <Button
                  color="success"
                  onClick={() => handleTaskComplete(task.id)}
                >
                  {task.completed ? "Unmark Completed" : "Mark Completed"}
                </Button>{" "}
                |
                <Button
                  color="danger"
                  onClick={() => handleTaskRemove(task.id)}
                >
                  Remove
                </Button>
              </div>

              {editableTask && editableTask.id === task.id && (
                <Collapse isOpen={editableTask && editableTask.id === task.id}>
                  <div>
                    <div>Project Owner: {task.ownerName}</div>
                    <div style={{ maxHeight: "50px", overflowY: "auto" }}>
                      Description: {task.description}
                    </div>
                  </div>
                </Collapse>
              )}
            </ListGroupItem>
          ))}
        </ListGroup>
      </Container>
    </Form>
  );
}
