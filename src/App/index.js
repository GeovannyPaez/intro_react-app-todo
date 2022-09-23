import React from "react";
import { TodoProvider } from "../TodoContext";
import {AppUI} from './AppUI'

// import './App.css';

// let todosDefault= [
//   {
//     text:'ir al gyimnacionsss',
//     isComplete: false
//   },
//   {
//     text:'ir al gyimnacions',
//     isComplete: true
//   },
//   {
//     text:'ir al gyimnacionaa',
//     isComplete: false
//   }
// ]

function App() {
  return (
    <TodoProvider>
      <AppUI/>
    </TodoProvider>
  );
}

export default App;
