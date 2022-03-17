import React, { useState } from "react";
import ToDoItem from "./ToDoItem";

function App() {
  const [inputItem, setInputItem] = useState("");
  const [items,setItems] = useState([]);

  function handleItem (event) {
    const newValue = event.target.value;
    setInputItem(newValue);
  }
function addItem()  {
  setItems((prevValues) => {
    return [...prevValues, inputItem];
   })
   setInputItem("");
  }
function deleteItem(id){
  setItems((prevValues) => {
    return prevValues.filter((item, index) => {
      return index !== id;
    });
  });
}

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleItem} type="text" value={inputItem} />
        <button onClick={addItem}>
          <span>Add</span>
        </button>
      </div>
        <div>
        <ul>
          {items.map((todoItem, index) => (
            <ToDoItem
            key={index}
            id={index}
            text={todoItem}
            onChecked={deleteItem}

            />

            ))}
        </ul>

        </div>
    </div>
  );
}

export default App;
