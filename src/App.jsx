import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [task, setTask] = useState("");
  const [complete, setComplete] = useState(false);
  const [todos, setTodos] = useState([
    {
      text: "Complete Backend Course",
      date: "28-09-2026 00:00 AM",
      completed: false,
    },
  ]);

  const addToDo = () => {
    if (task.trim() === "") return;
    const newTodo = {
      text: task,
      date: new Date().toLocaleString(),
      completed: complete,
    };
    setTodos([...todos, newTodo]);
    setTask("");
    setComplete(false);
  };

  const toggleCompleted = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  };

  const deleteTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  return (
    <div className='container'>
      <h2 className='title'>React To-Do List</h2>
      <div className="input-section">
        <input
          type="text"
          placeholder="Enter Task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          className='input-box'
        />
        <label className="checkbox-label">
          <input
            type='checkbox'
            checked={complete}
            onChange={(e) => setComplete(e.target.checked)}
          />
          Mark as Completed
        </label>
        <button className='add-btn' onClick={addToDo}>Add</button>
      </div>
      <div className="todo-section">
        <ul className='todo-list'>
          {todos.map((todo, index) => (
            <li
              className={`todo-item ${todo.completed ? "completed" : "not-completed"}`}
              key={index}
            >
              <div className="todo-info">
                <div className="todo-text-date">
                  <p className="todo-text">{todo.text}</p>
                  <small className="todo-date">{todo.date}</small>
                </div>
              </div>
              <div className="actions">
                <button
                  onClick={() => toggleCompleted(index)}
                  className={`status-btn ${todo.completed ? "green" : "red"}`}
                >
                  {todo.completed ? "Mark Not Done" : "Mark Done"}
                </button>
                <button className="delete-btn" onClick={() => deleteTodo(index)}>
                  {"\u{1F5D1}\u{FE0F}"}
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
export default App;