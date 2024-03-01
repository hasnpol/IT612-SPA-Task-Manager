<<<<<<< HEAD
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
=======
import "./styles.css";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";
import { Container, Form, Input, Label } from "reactstrap";

import DatePicker from "react-datepicker";
>>>>>>> 6abfb61cd51be1fa414cdd660101bfaa150d7894
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
=======
      <Label>Project Owner: </Label>
      <form method="post" onSubmit={handleSubmit}>
        <Input
          name="owner"
          value={owner}
          onChange={(e) => setOwner(e.target.value)}
        />{" "}
        {/*Captures 'owner' value from user.*/}
        <Label>Project Name: </Label>
        <Input
          name="project"
          value={project}
          onChange={(e) => setProject(e.target.value)}
        />
        {/*Captures 'project' value from user.*/}
        <Label>Due Date: </Label>
        <DatePicker
          name="date"
          selected={date}
          onChange={(date) => setDate(date)}
        />
        <button type="submit">Submit form</button>
        <button type="reset">Reset form</button>
      </form>
      {/*Lets user select date and assigns it.*/}
      <Container>
        {/*<Row>
          <Col>
            <TaskForm ownerName={owner} projectName={project} dateDue={date} />
          </Col>
        </Row>*/}
>>>>>>> 6abfb61cd51be1fa414cdd660101bfaa150d7894
      </Container>
    </Form>
  );
}
