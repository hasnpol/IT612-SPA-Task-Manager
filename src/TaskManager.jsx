import "./styles.css";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";
import { Container, Form, Input, Label } from "reactstrap";

import DatePicker from "react-datepicker";
import TaskForm from "./TaskForm";

export default function TaskManager() {
  const [owner, setOwner] = useState(""); //For project owner
  const [project, setProject] = useState(""); //For project name
  const [date, setDate] = useState(new Date()); //For date selection

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
    <Form>
      <h1>Tasks</h1>
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
        <\t>
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
      </Container>
    </Form>
  );
}
