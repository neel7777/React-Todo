import React from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import './components/Todo.css'

const todos = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
]


class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      todoList: todos
    }
  }
  

  addItem = itemName => {
    // add a new item to the groceries state
    const newItem = {
      task: itemName,
      id: Date.now(),
      completed: false
      
    };
    this.setState({
      todoList: [...this.state.todoList, newItem]
    });
  };

  toggleCompleted = clickedItemId => {
    const newTodoList = this.state.todoList.map(
      item => {
        if (item.id === clickedItemId) {
          return {
            ...item,
            
            completed: !item.completed
            
          };
        } else {
          return item;
        }
      }
    )
    this.setState({
      todoList: newTodoList     
    });
  };

  clearItem = e => {
    e.preventDefault();
    this.setState({
      todoList: this.state.todoList.filter(item => !item.completed)
    })
  }

  

  render() {
    return (
      <div>
        <h2 className="title">Todo List!</h2>
        <TodoForm addItem={this.addItem} clearItem={this.clearItem}/>
        <TodoList todos={this.state.todoList} toggleCompleted={this.toggleCompleted} />
      
      </div>

      
    );
  }
}

export default App;
