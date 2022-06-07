import { useState,useEffect, useRef, useMemo} from "react";

function UseMemoHook(){
    const [count, setCount] = useState(0);
    const [todos, setTodos] = useState([]);
    const calculation = useMemo(() => expensiveCalculation(count), [count]);
    function expensiveCalculation(a){
        console.log("expensive calculation called")
        return a
    }
    function updateCount(){
        setCount(5)
    }

    return <div> 
        <h1>Use Memo Hook Example</h1>
        <h1>Hi What is up {count}</h1>
        <button onClick={updateCount}>Update Count</button>
        </div>

}
export default UseMemoHook