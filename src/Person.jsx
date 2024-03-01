import "./styles.css";
import Timer from "./Timer";

function Person() {
  return (
    <div>
      <img src="https://www.copahost.com/blog/wp-content/uploads/2019/07/imgsize2.png" />
      <br /> <h2>Peter Parker</h2>
      <p>
        <strong>Role: </strong>Spider-Man
      </p>
      <p>
        <strong>Age: </strong>18
      </p>
      <p>
        <strong>Pronouns: </strong>he/him
      </p>
      <hr />
      <Timer />
      <br />
    </div>
  );
}

export default Person;
