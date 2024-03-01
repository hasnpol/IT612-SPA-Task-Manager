import "./styles.css";
import Timer from "./Timer";
import { Input, Label } from "reactstrap";

function Person() {
  return (
    <div>
      <img src="https://www.copahost.com/blog/wp-content/uploads/2019/07/imgsize2.png" />
      <br /> <h3>Peter Parker</h3>
      <Timer />
      <br />
      <Label>Total Hours in Pay-Period: </Label>
      <Input value="0" />
    </div>
  );
}

export default Person;
