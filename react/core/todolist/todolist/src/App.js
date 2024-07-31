import React, { useState } from 'react';
import ToDoItem from './components/ToDoItem';
import ToDoList from './components/ToDoList';
import ToDoForm from './components/ToDoForm';
import './App.css';

function App() {
    const [todos, setTodos] = useState([
        { id: 1, text: 'Get MERN black belt.', completed: false },
        { id: 2, text: 'Get Python black belt.', completed: true }
    ]);

    const addTodo = (todo) => {
        setTodos([...todos, todo]);
    };

    const toggleComplete = (id) => {
        setTodos(
            todos.map(todo =>
                todo.id === id ? { ...todo, completed: !todo.completed } : todo
            )
        );
    };

    const removeTodo = (id) => {
        setTodos(todos.filter(todo => todo.id !== id));
    };

    return (
        <div className="App">
            <h1>Todo List</h1>
            <ToDoForm addTodo={addTodo} />
            <ToDoList todos={todos} toggleComplete={toggleComplete} removeTodo={removeTodo} />
        </div>
    );
}

export default App;