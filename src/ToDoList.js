export default function ToDoList({value,key,id,style,onClick}){
  return(
      <>
      <div key={key} style={style} className="ToDoList" onClick={()=>onClick(id)} data-testid="ToDoList">{value}</div>
      </>
  )
}