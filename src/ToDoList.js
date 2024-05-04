export default function ToDoList(){

    const list = ["Read SpringBoot", "Complete assignments", "Prepare breakfast", "Sleep for 2 hours", "Take a shower"];

    return (<>
    <div className="ToDoList" >
        {list.map((todo) => (
            <div key={todo} data-testid="ToDoList" >
                {todo}
            </div>
        ))
    }  
    </div>
    </>);
}