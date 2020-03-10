import React from 'react';

const Todo = props => {
    return (
        <div onClick={() => props.toggleCompleted(props.each.id)}
        className={`each${props.each.completed ? ' completed' : ''}`}>
        
      
            <p>{props.each.task}</p>
        </div>
    )
}

export default Todo;