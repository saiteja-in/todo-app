import React, { useState, useRef } from "react";
import "./App.css";
const App = () => {
  const [todolist, setTodolist] = useState([]);
  const [currentlist, setCurrentList] = useState("");
  // const[display,setDisplay]=useState(false)
  const inputTask = useRef(null);

  const addTask = () => {
    setTodolist([...todolist, currentlist]);
    inputTask.current.value="";
  };
  return (
    <>
      <div className="App">
        <h1>ToDo Application</h1>
        <input
          ref={inputTask}
          type="text"
          placeholder="Task.."
          // value={currentlist}
          onChange={(e) => setCurrentList(e.target.value)}
        ></input>
        <button onClick={addTask}>Add Task</button>
        <hr />
      </div>
      <div>
        <ul>
          {todolist.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default App;
