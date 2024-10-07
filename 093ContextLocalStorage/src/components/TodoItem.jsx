import React, { useState } from 'react'; // Import React and useState hook
import { useTodo } from '../Contexts'; // Import the custom hook to access Todo context

function TodoItem({ todo }) {
    // Log the current todo object to the console for debugging
    console.log(todo);

    // State to determine if the todo is in edit mode (true) or not (false)
    const [isTodoEditable, setIsTodoEditable] = useState(false);
    
    // State to hold the current message of the todo
    const [todoMsg, setTodoMsg] = useState(todo.todo); // Initialize with the current todo's message

    // Destructure functions from the Todo context for managing todos
    const { updateTodo, deleteTodo, todoComplete } = useTodo();  

    // Function to handle the editing of a todo item
    const editTodo = () => {
        console.log(todo.id); // Log the todo ID for debugging
        // Call the updateTodo function with the todo ID and updated message
        updateTodo(todo.id, { ...todo, todo: todoMsg });
        setIsTodoEditable(false); // Exit edit mode after updating
    };

    // Function to toggle the completion state of the todo
    const toggleCompleted = () => {
        console.log(todo.id); // Log the todo ID for debugging
        todoComplete(todo.id); // Call the function to mark the todo as complete or incomplete
    };

    return (
        // Main container for the todo item
        <div
            className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300 text-black ${
                todo.completed ? "bg-[#c6e9a7]" : "bg-[#ccbed7]"
            }`}
        >
            {/* Checkbox for marking the todo as completed */}
            <input
                type="checkbox" // Set the input type to checkbox
                className="cursor-pointer" // Add cursor pointer style for better UX
                checked={todo.completed} // Checkbox checked state reflects the completed status of the todo
                onChange={toggleCompleted} // Call toggle function when checkbox is clicked
            />
            
            {/* Input field for editing the todo message */}
            <input
                type="text" // Set the input type to text
                className={`border outline-none w-full bg-transparent rounded-lg ${
                    isTodoEditable ? "border-black/10 px-2" : "border-transparent"
                } ${todo.completed ? "line-through" : ""}`} // Apply styles based on whether the todo is editable and completed
                value={todoMsg} // Bind the input value to todoMsg state for two-way data binding
                onChange={(e) => setTodoMsg(e.target.value)} // Update todoMsg state as the user types
                readOnly={!isTodoEditable} // Make input read-only unless in edit mode
            />
            
            {/* Edit/Save Button */}
            <button
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
                onClick={() => {
                    // Prevent editing if the todo is marked as completed
                    if (todo.completed) return;

                    // If in edit mode, save the changes; otherwise, toggle edit mode
                    if (isTodoEditable) {
                        editTodo(); // Call editTodo to save the changes
                    } else {
                        setIsTodoEditable((prev) => !prev); // Toggle the editable state
                    }
                }}
                disabled={todo.completed} // Disable button if the todo is completed
            >
                {/* Button text changes based on whether the todo is in edit mode */}
                {isTodoEditable ? "📁" : "✏️"} 
            </button>
            
            {/* Delete Todo Button */}
            <button
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
                onClick={() => deleteTodo(todo.id)} // Call delete function when clicked
            >
                ❌ {/* Delete icon */}
            </button>
        </div>
    );
}

export default TodoItem; // Export the component for use in other parts of the application
