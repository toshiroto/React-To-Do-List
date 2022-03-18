import React, { useState } from "react";
import ToDoItem from "./ToDoItem";

function App() {
   const [items,setItems] = useState([]);


function addItem(inputItem)  {
  setItems((prevValues) => {
    return [...prevValues, inputItem];
   })
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
        <InputArea
        onAdd={addItem} />
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
