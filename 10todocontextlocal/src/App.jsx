import { useEffect, useState } from 'react'
import './App.css'
import { TodoProvider } from './context/TodoContext.js'
import TodoForm from './components/TodoForm.jsx'
import TodoItem from './components/TodoItem.jsx'

function App() {
  const [todos, setTodos] = useState([])

  // Load from localStorage once
  useEffect(() => {
    try {
      const saved = JSON.parse(localStorage.getItem('todos')) || []
      setTodos(saved)
    } catch (e) {
      console.error('Failed to parse todos from localStorage', e)
    }
  }, [])

  // Persist on change
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  const addTodo = (todo) => {
    // BUGFIX: previously only set { id } and lost the todo fields
    setTodos((prev) => [{ id: Date.now(), ...todo }, ...prev])
  }

  const updateTodo = (id, todo) => {
    setTodos((prev) =>
      prev.map((t) => (t.id === id ? { ...t, ...todo } : t))
    )
  }

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((t) => t.id !== id))
  }

  const toggleComplete = (id) => {
    setTodos((prev) =>
      prev.map((t) =>
        t.id === id ? { ...t, completed: !t.completed } : t
      )
    )
  }

  return (
    <TodoProvider
      value={{ todos, addTodo, updateTodo, deleteTodo, toggleComplete }}
    >
      <div className="min-h-screen bg-slate-100 py-8">
        <div className="w-full max-w-2xl mx-auto shadow-xl rounded-lg px-4 py-6 bg-white">
          <h1 className="text-3xl font-bold text-center mb-4">Todo App</h1>
          <div className="mb-6">
            <TodoForm />
          </div>

          <div className="space-y-3">
            {todos.length === 0 && (
              <p className="text-center text-gray-500">No todos yet. Add one!</p>
            )}
            {todos.map((todo) => (
              <div key={todo.id} className="w-full">
                <TodoItem todo={todo} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </TodoProvider>
  )
}

export default App
