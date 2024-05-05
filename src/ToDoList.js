
export default function ToDoList({toDoList}){
    
    return (<>
    <div className="ToDoList" >
        <ul>
        {toDoList.map((todo) => <div key={todo} data-testid="ToDoList">{todo}</div>)}  
        </ul>
    </div>
    </>);
}