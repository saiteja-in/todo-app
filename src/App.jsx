import React, { useState, useRef } from "react";
import "./App.css";
const App = () => {
  const [todolist, setTodolist] = useState([]);
  const [currentlist, setCurrentList] = useState("");
  // const[display,setDisplay]=useState(false)
  const inputTask = useRef(null);

  const addTask = () => {
    if (currentlist) {
      setTodolist([...todolist, {task:currentlist,completed:false}]);
      inputTask.current.value = "";
      setCurrentList("");
    }
  };
  const deleteTask=(val)=>{
    setTodolist(todolist.filter((task)=>{
      return task.task!==val;
    }))
  }
  const completeTask=(val)=>{
    setTodolist(todolist.map((task)=>{
      return task.task==val ?{task:val,completed:true}:{task:task.task,completed: task.completed? true:false}
    }))
  }
  return (
    <>
      <div className="App">
        <h1>ToDo Application</h1>
        <input
          ref={inputTask}
          type="text"
          placeholder="Task.."
          onKeyDown={(e)=>{if (e.keyCode==13) addTask()}}
          // ^ this function interacts with the keyboard keys
          // enter key code is 13, if we press enter addTask function runs
          value={currentlist.task}
          onChange={(e) => setCurrentList(e.target.value)}
        ></input>
        <button onClick={addTask}>Add Task</button>
        <hr />
      </div>
      <div>
        <ul>
          {todolist.map((item, index) => {
            return(
              <div id="tasks">
               <li key={index}>{item.task}</li>
               <button onClick={()=>completeTask(item.task)}>completed</button>
               <button onClick={()=>deleteTask(item.task)}>X</button>
               {item.completed ?(<h2>task completed</h2>):(<h2>task not completed</h2>)}
              </div>
              );
          })}
        </ul>
      </div>
    </>
  );
};

export default App;
