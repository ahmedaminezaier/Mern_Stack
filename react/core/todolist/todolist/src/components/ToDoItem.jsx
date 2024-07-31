import React from 'react';

const TodoItem = ({ todo, toggleComplete, removeTodo }) => {
  return (
      <div>
          <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
              {todo.text}
          </span>
          <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleComplete(todo.id)}
          />
          <button onClick={() => removeTodo(todo.id)}>Delete</button>
      </div>
  );
};

export default TodoItem;