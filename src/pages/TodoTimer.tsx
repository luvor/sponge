import { useState, useEffect } from 'react'

export default function TodoTimer() {
  const [todos, setTodos] = useState<any>([])
  const [todoText, setTodoText] = useState('')
  const [todoMinutes, setTodoMinutes] = useState(0)

  const [refresh, setRefresh] = useState(false)

  const addTodo = () => {
    if (todoText === '') return
    const newTodo = {
      id: todos.length,
      text: todoText,
      minutes: todoMinutes,
      time: new Date().getTime() + todoMinutes * 60 * 1000,
      timeDisplay: `${todoMinutes}:00`,
      done: false,
    }
    setTodos([...todos, newTodo])
    setTodoText('')
    setTodoMinutes(0)
  }

  const interval = setInterval(() => {
    setRefresh(!refresh)
  }, 1000)

  useEffect(() => {
    return () => {
      clearInterval(interval)
    }
  }, [])

  const formatTime = (timestamp: number) => {
    if (timestamp < 0) return '00:00'
    const minutes = Math.floor(timestamp / 1000 / 60)
    const seconds = Math.round((timestamp / 1000) % 60)
    return `${minutes}:${seconds < 10 ? '0' + seconds : seconds}`
  }

  const handleDeleteTodo = (id: number) => {
    setTodos(todos.filter((todo: any) => todo.id !== id))
  }

  const handleMarkDone = (id: number) => {
    setTodos(
      todos.map((todo: any) => {
        if (todo.id === id) {
          todo.done = !todo.done
        }
        return todo
      })
    )
  }

  return (
    <div className="flex flex-col items-center justify-center mt-10 p-2">
      <div className="flex flex-col items-center justify-center w-full max-w-md px-4 py-6 space-y-4 bg-white rounded-md shadow">
        <div className="flex flex-col items-center justify-center space-y-2">
          <h1 className="text-2xl font-bold text-gray-700">Todo Timer</h1>
          <p className="text-sm text-gray-500">Туду лист с таймером</p>
        </div>
        <div className="flex flex-col items-center justify-center w-full space-y-2">
          <input
            type="text"
            placeholder="текст..."
            className="w-full px-4 py-2 text-gray-700 bg-gray-100 border border-transparent rounded-md focus:outline-none focus:bg-white focus:border-gray-500"
            value={todoText}
            onChange={(e) => setTodoText(e.target.value)}
          />
          <input
            type="number"
            placeholder="Time"
            className="w-full px-4 py-2 text-gray-700 bg-gray-100 border border-transparent rounded-md focus:outline-none focus:bg-white focus:border-gray-500"
            value={todoMinutes}
            onChange={(e) => setTodoMinutes(parseInt(e.target.value))}
          />
          <button className="w-full px-4 py-2 border-none text-white bg-indigo-500 rounded-md hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600" onClick={addTodo}>
            Добавить
          </button>
        </div>
        <div className="flex flex-col items-center justify-center w-full space-y-2">
          {todos.map((todo: any, index: number) => (
            <div key={index} className="flex flex-row items-center justify-between w-full px-4 py-2 space-x-2 bg-gray-100 rounded-md">
              <div className="flex flex-row items-center justify-start space-x-2">
                <div className="flex flex-col items-start justify-center">
                  <p className={`text-sm font-medium text-gray-700 ${formatTime(todo.time - new Date().getTime()) === '00:00' || todo.done ? 'line-through' : ''}`}>{todo.text}</p>
                  <p className="text-xs text-gray-500">{todo.done ? '00:00' : formatTime(todo.time - new Date().getTime())}</p>
                </div>
              </div>
              <div className="flex flex-row items-center justify-end space-x-2">
                <button className="px-2 border-none py-1 text-xs text-white bg-red-500 rounded-md hover:bg-red-600 focus:outline-none focus:bg-red-600" onClick={() => handleDeleteTodo(todo.id)}>
                  Удалить
                </button>
                {formatTime(todo.time - new Date().getTime()) === '00:00' || todo.done ? (
                  ''
                ) : (
                  <button className="px-2 border-none py-1 text-xs text-white bg-green-500 rounded-md hover:bg-green-600 focus:outline-none focus:bg-green-600" onClick={() => handleMarkDone(todo.id)}>
                    Сделано
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
