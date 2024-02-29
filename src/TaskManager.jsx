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

  return (
    <Form>
      <h1>Tasks</h1>
      <Label>Project Owner: </Label>
      <Input value={owner} onChange={(e) => setOwner(e.target.value)} />{" "}
      {/*Captures 'owner' value from user.*/}
      <Label>Project Name: </Label>
      <Input value={project} onChange={(e) => setProject(e.target.value)} />
      {/*Captures 'project' value from user.*/}
      <Label>Due Date: </Label>
      <DatePicker selected={date} onChange={(date) => setDate(date)} />
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
