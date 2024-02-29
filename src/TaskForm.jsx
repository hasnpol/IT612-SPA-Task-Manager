import "./styles.css";
import { Container, Form, FormGroup, Input } from "reactstrap";

export default function TaskForm(ownerName, projectName, dateDue) {
  const taskList = [
    {
      ownerName: string(ownerName),
      project: string(projectName),
      date: new Date(dateDue),
    },
  ];

  return (
    <Form>
      <Container>
        <FormGroup>
          <Input
            id="tasklist"
            multiple
            name="tasklist"
            type="textarea"
            size="6"
          >
            {taskList.map((w, i) => (
              <option value={i}>
                Project Owner: {w.ownerName} \t Project Name: {w.project} \t Due
                Date: {w.date} \n
              </option>
              /*Prints out the items for task*/
            ))}
          </Input>
        </FormGroup>
      </Container>
    </Form>
  );
}
