import "./styles.css";
import Person from "./Person";
import TaskManager from "./TaskManager";

export default function App() {
  return (
    <div className="App">
      <h1 id="title">Personal Task Manager</h1>
      <Person />
      <hr />
      <TaskManager />
    </div>
  );
}
