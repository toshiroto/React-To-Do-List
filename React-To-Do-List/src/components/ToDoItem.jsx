import React, { useState } from "react"

function ToDoItem (props) {
  const [isClicked, setIsClicked] = useState(false);

  function handleLine() {
    setIsClicked(true);
  }
return (
  <div>
<h2 onClick={handleLine} style={{textDecoration: isClicked ? "line-through" : "none"}}><li>{props.text}</li></h2>
</div>
)
}


export default ToDoItem;
