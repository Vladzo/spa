import {useDispatch} from "react-redux";

export default function TODOITEM({text, completed, id}) {

    const dispatch = useDispatch();

    return (
        <div>
            <h3 style={completed ? {textDecoration: "line-through"}: {}}>{text}
                <input type="checkbox" checked={completed} onChange={() => dispatch({type: "CHANGE-COMPETED", payload: {id}})}/></h3>
            <button onClick={() => dispatch({type: "DELETE-TODO-ITEM", payload: {id}})}>Delete</button><hr/>
        </div>
    );
}