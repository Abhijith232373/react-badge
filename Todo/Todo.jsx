import React, { useState } from "react";

const TodoApp = () => {
const [input, setInput] = useState("");
const [todos, setTodos] = useState([]);
const [editId, setEditId] = useState(null);

  const handleAdd = () => {
    if (!input.trim()) return;

    if (editId) {
      setTodos(todos.map(t => t.id === editId ? { ...t, text: input } : t));
      setEditId(null);
    } else {
      setTodos([...todos, { id: Date.now(), text: input }]);
    }

    setInput("");
  };

  const handleDelete = (id) => setTodos(todos.filter(t => t.id !== id));

  const handleEdit = (todo) => {
    setEditId(todo.id);
    setInput(todo.text);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Type something..."
      />
      <button onClick={handleAdd}>{editId ? "Update" : "Add"}</button>

      <ul style={{ listStyle: "none", padding: 0 }}>
        {todos.map((t) => (
          <li key={t.id}>
            {t.text}{" "}
            <button onClick={() => handleEdit(t)}>Edit</button>
            <button onClick={() => handleDelete(t.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoApp;
