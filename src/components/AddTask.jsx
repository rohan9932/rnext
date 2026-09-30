import { useState } from "react";

export default function AddTask({ onAddTask }) {
  const [text, setText] = useState("");

  function handleChange(e) {
    setText(e.target.value);
  }

  function handleAddTask() {
    if (text.trim() === "") return;
    onAddTask(text);
    setText("");
  }

  return (
    <>
      <input placeholder="Add task" value={text} onChange={handleChange} />
      <button onClick={handleAddTask}>Add</button>
    </>
  );
}
