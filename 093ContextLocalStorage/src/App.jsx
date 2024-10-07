import { useState, useEffect } from 'react'  // Importing React's useState and useEffect hooks
import './App.css'  // Importing the CSS for styling the App component
import { TodoProvider } from './Contexts'  // Importing TodoProvider from the context file
import { TodoForm, TodoItem } from './components'  // Importing child components TodoForm and TodoItem

function App() {
  const [todos, setTodos] = useState([])  // State to hold the list of todos

  // Function to add a new todo
  const addTodo = (todo) => {
    console.log(todo);
    setTodos((prev) => [{ id: Date.now(), ...todo }, ...prev])  // Add the new todo with a unique id and merge it with previous todos
  }

  // Function to update a todo based on its id
  const updateTodo = (id, todo) => {
    setTodos((prev) => prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo)))  // Find the todo by id and replace it with the updated version
  }

  // Function to delete a todo based on its id
  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((prevTodo) => prevTodo.id !== id))  // Remove the todo whose id matches the one provided
  }

  // Function to mark a todo as completed/uncompleted
  const todoComplete = (id) => {
    setTodos((prev) => 
      prev.map((prevTodo) => 
        prevTodo.id === id ? { ...prevTodo, completed: !prevTodo.completed } : prevTodo  // Toggle the completed state of the todo
      )
    )
  }

  // useEffect to retrieve todos from localStorage on initial render
  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("Saibaz"))  // Get the todos from localStorage and parse them into an array
    if (todos && todos.length) {
      setTodos(todos)  // If there are todos in localStorage, set them in the state
    }
  }, [])  // Empty dependency array means this effect runs only once when the component mounts

  // useEffect to store todos in localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('Saibaz', JSON.stringify(todos))  // Convert the todos array to a string and store it in localStorage
  }, [todos])  // This effect runs every time the 'todos' state changes

  return (
    <TodoProvider value={{ todos, addTodo, updateTodo, deleteTodo, todoComplete }}>  {/* Provide todos and actions to the context */}
      <div className="bg-[#172842] min-h-screen py-8">  {/* Container div with background and padding */}
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">  {/* Centralized box with shadow and padding */}
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>  {/* Heading */}
          
          <div className="mb-4">
            {/* Todo form goes here */}
            <TodoForm />  {/* Render the TodoForm component */}
          </div>

          <div className="flex flex-wrap gap-y-3">
            {/* Loop and Add TodoItem here */}
            {
              todos.map((todo) => (  // Loop over the todos array
                <div className='w-full' key={todo.id}>  {/* Assign a unique key to each TodoItem */}
                  <TodoItem todo={todo} />  {/* Render a TodoItem for each todo, passing the todo data as a prop */}
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </TodoProvider> 
  )
}

export default App  // Export the App component as the default export
