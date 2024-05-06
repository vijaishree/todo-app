import ToDoList from "./ToDoList";
import RemoveButton from "./RemoveButton";
import Header from './Header/Header.js'
import { useState } from "react";

export default function ToDoApp(){

    const [list , setList] = useState(["Read SpringBoot", 
                                        "Complete assignments",
                                        "Prepare breakfast",
                                        "Sleep for 2 hours",
                                        "Take a shower"]);

    const [completed , setCompleted] = useState(Array(5).fill(false));

    function handleStrikeThrough(id){

        completed[id] = !completed[id];

        setCompleted([...completed]);
    }

    function onRemoveClick(){

        let newlist = [];

        completed.map((bool,index) => {

                if(bool === false) newlist.push(list[index]);

                else completed[index] = false;

        })
            
        setCompleted([...completed]);

        if(newlist.length === 0) newlist.push(["Nothing left Buddy!Sleep!"]);

        setList([...newlist]);
    }

    return(
        <>

        <Header />
        
        {list.map((value,index) => (
            <div key = {index}>
            <ToDoList value={value}
                      key={index}
                      id={index}
                      style= {{textDecoration : completed[index] ? 'line-through' : 'none'}}
                      onClick={handleStrikeThrough}/>
            </div>
        ))}
        
        <RemoveButton onClick = {onRemoveClick}/>
        </>
    )
}