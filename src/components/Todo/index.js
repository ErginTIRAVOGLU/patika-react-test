import React, { useState } from "react";

const defaultItems = [
  { title: "Item A" },
  { title: "Item B" },
  { title: "Item C" },
];
function Todo() {
  const [text, setText] = useState("");
  const [items, setItems] = useState(defaultItems);

  const addItem = () => {
    setItems((prev) => [...prev, { title: text }]);
    setText("");
  };
  return (
    <div>
      <label>
        Text
        <input value={text} onChange={(e) => setText(e.target.value)} />
      </label>
      <br />
      <br />
      <button onClick={addItem}>Ekle</button>

      <br />
      <br />
      {items.map((item, index) => {
        return <div key={index}>{item.title}</div>;
      })}
    </div>
  );
}

export default Todo;
