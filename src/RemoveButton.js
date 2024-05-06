export default function RemoveButton({onClick}){
    return(
        <button className="RemoveButton" onClick={onClick} data-testid="RemoveButton" >Remove</button>
    )
}