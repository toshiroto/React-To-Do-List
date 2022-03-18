import React, { useState } from "react";

function InputArea(props) {
const [inputItem, setInputItem] = useState("");

  function handleItem (event) {
    const newValue = event.target.value;
    setInputItem(newValue);
  }

  return (
    <div className="form">
        <input onChange={handleItem} type="text" value={inputItem} />
        <button onClick={() => {
          props.onAdd(inputItem);
          setInputItem("");
        }}
        >
          <span>Add</span>
        </button>
      </div>
  )
}

export default InputArea;
