import { useState } from "react";
import './App.css'
import { CreateTodo } from "./Components/CreateTodo";
import { Todos } from "./Components/Todos";

function App(){


  return(
    <div>
        <CreateTodo></CreateTodo>
    </div>
  )
}


export default App