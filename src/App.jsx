import React,{useState} from 'react'
import './App.css'
const App = () => {

  const[todolist,setTodolist]=useState([])
  const[currentlist,setCurrentList]=useState('')
  // const[display,setDisplay]=useState(false)

  const addTask=()=>{
    if(currentlist){

      setTodolist([...todolist,currentlist]);
      setCurrentList('') 
    }
  }
  return (
    <>
    <div className="App">
      <h1>ToDo Application</h1>
      <input placeholder="Task.." value={currentlist} onChange={(e)=>setCurrentList(e.target.value)}></input>
      <button onClick={addTask} >Add Task</button>
      <hr />
    </div>
    <div>
      <ul>
        { todolist.map((item,index)=><li key={index}>{item}</li>)}
      </ul>
    </div>
    </>
  )
}

export default App
