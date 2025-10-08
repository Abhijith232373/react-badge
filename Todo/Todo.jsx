import React, { useState } from "react";

 function TodoApp() {
  const [todos, setTodos] = useState([]);      // store all todos
  const [input, setInput] = useState("");      // current input value
  const [editId, setEditId] = useState(null);  // which todo is being edited

  // Add or Update Todo

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;                  // ignore empty input

    if (editId !== null) {
      // update existing todo
      const updated = todos.map((t, i) =>
        i === editId ? { ...t, text: input } : t
      );
      setTodos(updated);
      setEditId(null);
    } else {
      // add new todo
      setTodos([...todos, { text: input }]);
    }

    setInput(""); // clear input
  };

  // Edit Todo
  const handleEdit = (index) => {
    setInput(todos[index].text);
    setEditId(index);
  };

  // Delete Todo
  const handleDelete = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  return (
    <div style={{ textAlign: "center", marginTop: 50 }}>
      <h2>Todo List</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={input}
          placeholder="Enter a task..."
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit">{editId !== null ? "Update" : "Add"}</button>
      </form>

      <ul style={{ listStyle: "none", padding: 0 }}>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo.text}
            <button onClick={() => handleEdit(index)}>Edit</button>
            <button onClick={() => handleDelete(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default TodoApp