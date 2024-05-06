export default function ToDoList({list ,completed,onClick}){

  return(
      <>
      {list.map((value,index) => <div key={index}
                                      style={{textDecoration : completed[index] ? 'line-through' : 'none'}}
                                      className="ToDoList"
                                      onClick={()=>onClick(index)}>{value}</div>)}
      </>
  )
}