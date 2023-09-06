import { useReducer, useState } from "react";

function reducer (state, action) {
    switch(action.type){
        case "increment":
            return state + action.actionValue;
        case "decrement":
            return state - action.actionValue;
        default:
            return state;
    }
}

export default function demo() {
    const [state, dispatch] = useReducer(reducer, 0);
    const [incrementValue, setIncrementValue] = useState(1);
    const [decrementValue, setDecrementValue] = useState(1);

    return <div>
            <h3>{state}</h3>
            Increment Value :<input onChange={e=>setIncrementValue(Number(e.target.value))} value={incrementValue}/> <button onClick={()=>dispatch({type: "increment", actionValue:incrementValue})}>+</button> <br/>
            Decrement Value :<input onChange={e=>setDecrementValue(Number(e.target.value))} value={decrementValue}/> <button onClick={()=>dispatch({type: "decrement", actionValue:decrementValue})}>-</button>
        </div>
}