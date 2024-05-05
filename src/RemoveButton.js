

export default function RemoveButton({onClick }){

    return(
        <button className="button" data-testid="RemoveButton" onClick= {onClick} >Remove</button>
    );
}