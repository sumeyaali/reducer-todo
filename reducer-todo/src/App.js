import React, {useState, useReducer} from 'react';
import './App.css';

import {reducer, initialState} from "./reducers/simpleReducer"; 

import {ToDoForm} from "./Components/ToDoForm";
import {ToDoList} from "./Components/ToDoList";



function App() {
const [state, dispatch] = useReducer(reducer, initialState)
//const [tasks, setTasks] = useState([]); 


const addItem = ( item) => {
  dispatch({ type: 'ADD_ITEM', payload: item})
}

const toggleItem = itemId => {
  dispatch({ type: 'TOGGLE_ITEM', payload: itemId})
};

 const clearCompleted = e => {
   e.preventDefault();
   dispatch({type: 'CLEAR_COMPLETED'})};
 
  return (
    <div className="App">
      <div> 
      <h1>Sumeya's To-Do List</h1>
      <ToDoForm addItem={addItem} />
      </div>
      <ToDoList
      tasks={state.tasks}
      toggleItem={toggleItem}
      clearCompleted={clearCompleted}
      /> 
      
    </div>
  );
}

export default App;
