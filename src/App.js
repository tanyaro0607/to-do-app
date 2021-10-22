import React, {useState} from 'react'
import TodoList from './TodoList'

export default function App() {
  const [todos, setTodos] = useState([
    {id: 1, title: 'First todo', completed: false},
    {id: 2, title: 'Second todo', completed: true},
  ])
  const [todoTitle, setTodoTitle] = useState('')

  //Доб. в список
  const addTodo = event => {
    //если нажата клавиша Enter
    if(event.key === 'Enter') {
      // в setTodos передаем:
      setTodos([
        ...todos, //1)старые элементы
        //2) новые элементы
        {
          id: Date.now(),
          title: todoTitle,
          completed: false
        }
      ])
      setTodoTitle('') //очищаем инпут
    }
  }

  return (
    <div className="container">
      <h1>Todo app</h1>

        <div className="input-field">
          <input 
            type="text"
            value={todoTitle}
            onChange={event => setTodoTitle(event.target.value)}
            onKeyPress={addTodo}
            />
          <label>Todo name</label>
        </div>

        <TodoList todos={todos} />
    </div>
  );
}