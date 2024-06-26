
import { useState } from 'react'
import './App.css'
import { CreateTodo } from './components/Createtodo';
import { Todos } from './components/todos';

function App() {
  const [todos, setTodos] = useState([]);

  fetch("https://localhost:3000/todo")
    .then(async (res) => {
      const json = await res.json();
      setTodos(json.todos)
    })


  return (
    <div>
      <CreateTodo> </CreateTodo>
      <Todos todos={todos}> </Todos>
    </div>
  )
}

export default App