import React from "react";
import {Task} from "./ToDo";

export const ToDoList = (props) => {

return (
    <div>
        {props.tasks.map(item => (

            <Task key={item.id} item={item} 
            toggleItem={props.toggleItem}/>
        ))}
 </div>
)


}