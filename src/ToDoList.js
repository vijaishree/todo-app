import { useEffect, useState } from "react";
export default function ToDoList({toDoList ,onHandleClick}){
  
  function handleStrikeThroughClick(e){
   
    e.preventDefault();
    
    if (e.target.style.textDecoration === 'none') {
      
     e.target.style.setProperty('text-decoration',reset);
      onHandleClick(e.target.id);
      
    } else {
      
      e.target.style.setProperty('text-decoration',reset);
      onHandleClick(e.target.id);
    }
  
}


return (
   <div>
    {toDoList.map((todo,index) => <div  className = "ToDoList " style={{textDecoration : 'none'}} data-testid ="ToDoList" key={index} id={index} onClick={handleStrikeThroughClick}>
      {todo}
      </div>)}

   </div>
    
    )
}