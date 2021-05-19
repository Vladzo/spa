import {useSelector, useDispatch} from "react-redux";

export default function Counter() {
    const counter = useSelector((state) => state.counter);
    const dispatch = useDispatch();

    return (
        <div style={{margin: '20px'}}>
            <div>
                <button onClick = {() => {
                    dispatch({type: "INC"})
                }}>+1</button>
                <button onClick={() => dispatch({type: "INC100"})}>+100</button>
            </div>
            <h1>{counter}</h1>
            <div>
                <button onClick={() => dispatch({type: "DEC"})}>-1</button>
                <button onClick={() => dispatch({type: "DEC100"})}>-100</button>
            </div>
        </div>
    );
}