import React, { useState } from 'react';
const TodoForm = ({ addTodo }) => {
    const [todo, setTodo] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!todo) return;
        addTodo({
            id: Math.random(),
            text: todo,
            completed: false
        });
        setTodo('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={todo}
                onChange={(e) => setTodo(e.target.value)}
            />
            <button type="submit">Add</button>
        </form>
    );
};

export default TodoForm;
