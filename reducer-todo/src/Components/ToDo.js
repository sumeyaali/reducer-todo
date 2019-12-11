import React from "react";


export const Task = (props) => {

return (
    <div>
        <p key={props.item.id} onClick= { () => {
            props.toggleItem(props.item.id)
        }}> 
            {props.item.item}
            {/* Why is this props.item.item and not props.item.tasks? */}
        </p>


    </div>
)


}