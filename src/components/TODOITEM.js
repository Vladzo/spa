import {useDispatch, useSelector} from "react-redux";

export default function TODOITEM({text, completed, id}) {
    //const checkbox = useSelector(state => state.)
    const dispatch = useDispatch();
    //const completed = useSelector(state => state.find(val => val.id === id).completed);
    //console.log(completed);
    const state = useSelector(state => state)
    return (
        <div>
            <h3 style={completed ? {textDecoration: "line-through"}: {}}>{text}
                <input type="checkbox" checked={completed} onChange={() => dispatch({type: "CHANGE-COMPETED", payload: {id}})}/></h3>
            {console.log(state)}
        </div>
    );
}