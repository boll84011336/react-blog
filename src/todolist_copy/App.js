import './App.css';
import styled from 'styled-components'
import { useState, useRef } from 'react'
import TodoItem from './TodoItem.js'

const BlackTodoItem = styled(TodoItem)`
background:black;
`


function App() {
  const [todos, setTodos] = useState([
    {id:1,content:'abc'}
  ])

  const [value, setValue] = useState('')
  const id = useRef(2)

  const handleButtonClick = () => {
    setTodos([...todos, {
      id:id.current,
      content:value
    }])
    setValue('')
    id.current++
  }

  const handleInputChange = (e) => {
    setValue(e.target.value)
  }

  const handleDeleteTodo = id => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  return (
    <div className="App">
      <input type="text" placeholder="todo" value={value} onChange={handleInputChange} />
      <button onClick={handleButtonClick}>Add todo</button>
      {
        todos.map(todo => <TodoItem key={todo.id} todo={todo} handleDeleteTodo={handleDeleteTodo}/>)
      }
    
    </div>
  );
}

export default App;
