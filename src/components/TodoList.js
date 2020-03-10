// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import Todo from './Todo';

const TodoList = props => {
  return (
    <div>
        {props.todos.map(element => (
            <Todo key={element.id} each={element} toggleCompleted={props.toggleCompleted} />
            
        ))}
        
        
    </div>
    
  );
};

export default TodoList;
