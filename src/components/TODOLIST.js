import {useSelector, useDispatch} from "react-redux";
import {useState} from "react";
import TODOITEM from "./TODOITEM";

export default function TODOLIST() {
    const dispatch = useDispatch();
    const [text, setText] = useState('');
    const [completed, setComplete] = useState(false);
    const item = useSelector((state) => state);

    return (
        <div style={{margin: '20px'}}>
            <h1>TODO LIST:</h1>
            <input type="text" value={text} onChange={event => setText(event.target.value)}/>
            <input type="checkbox" checked={completed} onChange={() => setComplete(!completed)}/><br/>
            <div>
                <button onClick={() => dispatch({type: "ADD-ITEM", payload: {text, completed}})}>Submit</button>
            </div>
            {item.length && item.map((val) => <TODOITEM key = {val.id} text={val.text} completed={val.completed} id={val.id}/>)}
        </div>
    );
}
