import React, {useState} from "react";

export const ToDoForm = (props) => {
const [newTask, setNewTask] = useState(" ")

  const  handleChanges = e => {
        setNewTask(e.target.value)
    };

    const submitButton = e => {
        e.preventDefault();
        props.addItem(newTask)
        setNewTask(" ")
    };
    // const clearButton = e => {
    //     e.preventDefault();
    //     props.removeItems(newTask)
    
    // }

    


return (
    <form>
        <input
        type="text"
        name="task"
        value={newTask}
        onChange={handleChanges}
        />

        <button onClick={submitButton}>Add Task </button>
        <button onClick={props.clearCompleted}>Clear Completed task</button>
        
        
      

    </form>
)

    


}



 