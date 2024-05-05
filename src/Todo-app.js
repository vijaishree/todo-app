import EmptyButton from './EmptyButton.js'
import Header from './Header/Header.js'
import ToDoList from './ToDoList.js'
import {useState} from 'react';
export default function TodoApp(){

    const [list, setList] = useState(["Read SpringBoot", "Complete assignments", "Prepare breakfast", "Sleep for 2 hours", "Take a shower"]);
    const [pressed , setPressed] = useState(true);

    function handleClick(){
        setPressed(!pressed);

        if(pressed) setList(["","Nothing to do buddy. Sleep!"]);

    }
    
    return(
        <>
        <Header />

        <ToDoList toDoList = {list} />

        <EmptyButton onClick={() => handleClick()} diasbled = {pressed} />
        </>
    )
    
}