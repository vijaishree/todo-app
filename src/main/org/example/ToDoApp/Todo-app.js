import ToDoList from "../ToDoList/ToDoList.js";
import RemoveButton from "../Button/RemoveButton.js";
import Header from '../Header/Header.js'
import { useState } from "react";

export default function ToDoApp(){

    const [list , setList] = useState(["Read SpringBoot", 
                                        "Complete assignments",
                                        "Prepare breakfast",
                                        "Sleep for 2 hours",
                                        "Take a shower"]);
    
    const noToDo = ["Nothing left buddy"];

    const [completed , setCompleted] = useState(Array(5).fill(false));

    function handleStrikeThrough(id){

        completed[id] = !completed[id];

        setCompleted([...completed]);
    }

    function onRemoveClick(){

        const newlist = [];

        completed.map((bool,index) => {

                if(bool === false) newlist.push(list[index]);

                else completed[index] = false;

        })
            
        setCompleted([...completed]);

        isEmpty(newlist);

    }

    function isEmpty(checkList){
       
        if(checkList.length < 1 || checkList.every((value) => (value === undefined))) checkList.push([...noToDo]); 

        setList([...checkList]);

    }

    return(
        <>

        <Header />
        
        <ToDoList   list = {list} completed = {completed} onClick={handleStrikeThrough}/>
        
        <RemoveButton onClick = {onRemoveClick}/>
        </>
    )
}