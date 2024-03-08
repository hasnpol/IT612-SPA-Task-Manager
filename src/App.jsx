import "./styles.css";
import Person from "./Person";
import TaskManager from "./TaskManager";

// App component; contains Person and TaskManager components.
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
