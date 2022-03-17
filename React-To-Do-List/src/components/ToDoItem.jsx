import React, { useState } from "react"

function ToDoItem (props) {
  const [isClicked, setIsClicked] = useState(false);

  function handleClick() {
    setIsClicked(prevValue => {
      return !prevValue;
    });
  }
return (
  <div onClick={handleClick} style={{textDecoration: isClicked ? "line-through" : "none"}}>
<li>{props.text}</li>
</div>
)
}


export default ToDoItem;
