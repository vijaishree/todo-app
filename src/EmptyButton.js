

export default function EmptyButton({onClick , disabled}){

    return(
        <button className="button" data-testid="EmptyButton" onClick= {onClick} disabled = {disabled}>Empty</button>
    );
}