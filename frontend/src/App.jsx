import { useState } from "react";
import './App.css'
import { CreateTodo } from "./Components/CreateTodo";
import { Todos } from "./Components/Todos";

function App(){
  return(
    <div>
        <CreateTodo></CreateTodo>
        <Todos todos={[
          {
            title:"computers",
            description:"2000 rs gaming pc"
          },
          {
            title:"Smart phone",
            description:"gaming phone"
          },
          {
            title:"car",
            description:"super car"
          },
        ]}></Todos>
    </div>
  )
}


export default App