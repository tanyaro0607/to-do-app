import React, {useState, useEffect} from 'react'
import TodoList from './TodoList'

export default function App() {
  const [todos, setTodos] = useState([])
  const [todoTitle, setTodoTitle] = useState('')

  //вызывается при старте компонента(загрузке стр)
  useEffect(() => {
    //получение данных, переданных локально
    const raw = localStorage.getItem('todos') || []
    setTodos(JSON.parse(raw))
  }, [])

  //сохраненение списка
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

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