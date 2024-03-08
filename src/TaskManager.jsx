import React, { useState } from "react";
import { Form, Button, Container, ListGroup, ListGroupItem } from "reactstrap";
import TaskForm from "./TaskForm";
import DataPusher from "./DataPusher";
import "./styles.css";

// TaskManager component; contains a form and a list of tasks.
// Contains TaskForm and DataPusher components.
export default function TaskManager() {
  const [tasks, setTasks] = useState([]);

  const handleTaskSubmit = (newTask) => {
    setTasks([...tasks, { ...newTask, id: tasks.length, completed: false }]);
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

  return (
    <Form className="Task">
      <h1 id="task_title">Tasks</h1>
      <Container className="TaskFormContainer">
        <TaskForm onTaskSubmit={handleTaskSubmit} />
        <ListGroup>
          {tasks.map((task) => (
            <ListGroupItem
              key={task.id}
              className={task.completed ? "completedTask" : ""}
            >
              <DataPusher />
              <div>
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
            </ListGroupItem>
          ))}
        </ListGroup>
      </Container>
    </Form>
  );
}
