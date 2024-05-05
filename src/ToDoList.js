import { useEffect, useState } from "react";
export default function ToDoList({toDoList ,onHandleClick,reseter}){
  const[reset, setReset] = useState('');

  if(reseter === true) setReset('none');

  useEffect(()=>{
    document.querySelector('.ToDoList').style.setProperty('text-decoration',reset)
})
  function handleStrikeThroughClick(e){
   
    e.preventDefault();
    
    if (e.target.style.textDecoration === 'none') {
      setReset('line-through')
     //e.target.style.setProperty('text-decoration',reset);
      onHandleClick(e.target.id);
      
    } else {
      setReset('none')
      //e.target.style.setProperty('text-decoration',reset);
      
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