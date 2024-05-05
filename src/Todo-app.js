import RemoveButton from './RemoveButton.js'
import Header from './Header/Header.js'
import ToDoList from './ToDoList.js'
import {useState} from 'react';

export default function TodoApp(){
    const [list, setList] = useState(["Read SpringBoot", "Complete assignments", "Prepare breakfast", "Sleep for 2 hours", "Take a shower"]);
    const [reseter , setReseter] = useState(false);
    const [ strike , setStrike] = useState(Array(list.length).fill(false));
    
    
    function handleStrikeThroughClick(indexOfSelectedLine){
        
        let newStrike = strike.slice();

        if(newStrike[indexOfSelectedLine]===true) newStrike[indexOfSelectedLine] = false ;

        else newStrike[indexOfSelectedLine] = true ;
        
        setStrike([...newStrike]);

    
    }

    function handleClick(){

        let newlist = [];
            strike.map((bool,index) => {
                if(bool === false) newlist.push(list[index]);
            })
            
        
        setList([...newlist]);

        strike.map((val,index) => {strike[index] = false});

        setReseter(true);

        console.log(strike);
        
    }
    
    return(
        <>
        <Header />
        
        <ToDoList toDoList = {list} onHandleClick = {handleStrikeThroughClick}  reset={reseter}/> 
        
        <RemoveButton onClick={handleClick}  />

        </>
    )
    
}