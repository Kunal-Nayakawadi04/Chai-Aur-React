import React, { useState } from 'react'
import { useTodo } from '../context/TodoContext'

function TodoItem({ todo }) {
  const [isTodoEditable, setIsTodoEditable] = useState(false)
  const [todoMsg, setTodoMsg] = useState(todo.todo)
  const { updateTodo, deleteTodo, toggleComplete } = useTodo()

  const editTodo = () => {
    if (!todoMsg.trim()) return
    updateTodo(todo.id, { ...todo, todo: todoMsg })
    setIsTodoEditable(false)
  }

  const onToggleCompleted = () => {
    // BUGFIX: call the provided toggleComplete instead of a recursive typo
    toggleComplete(todo.id)
  }

  return (
    <div className={`flex items-center justify-between gap-2 p-3 rounded-lg border ${todo.completed ? 'opacity-60' : ''}`}>
      <div className="flex items-center gap-3 flex-1">
        <input
          type="checkbox"
          className="w-5 h-5"
          checked={todo.completed}
          onChange={onToggleCompleted}
        />

        {isTodoEditable ? (
          <input
            type="text"
            className="flex-1 border rounded px-2 py-1 outline-none"
            value={todoMsg}
            onChange={(e) => setTodoMsg(e.target.value)}
          />
        ) : (
          <span className={`flex-1 ${todo.completed ? 'line-through' : ''}`}>
            {todo.todo}
          </span>
        )}
      </div>

      <div className="flex items-center gap-2">
        {/* Save / Edit */}
        <button
          className="inline-flex w-8 h-8 rounded-lg justify-center items-center bg-gray-50 hover:bg-gray-100"
          onClick={() => (isTodoEditable ? editTodo() : setIsTodoEditable(true))}
        >
          {isTodoEditable ? '📁' : '✏️'}
        </button>

        {/* Cancel edit when editing */}
        {isTodoEditable && (
          <button
            className="inline-flex w-8 h-8 rounded-lg justify-center items-center bg-gray-50 hover:bg-gray-100"
            onClick={() => {
              setIsTodoEditable(false)
              setTodoMsg(todo.todo)
            }}
            title="Cancel"
          >
            ↩️
          </button>
        )}

        {/* Delete */}
        <button
          className="inline-flex w-8 h-8 rounded-lg justify-center items-center bg-gray-50 hover:bg-gray-100"
          onClick={() => deleteTodo(todo.id)}
        >
          ❌
        </button>
      </div>
    </div>
  )
}

export default TodoItem
