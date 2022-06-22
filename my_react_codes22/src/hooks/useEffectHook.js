import { useState,useEffect, useRef, useMemo} from "react";

function UseEffectHook(){
    const [count, setCount] = useState(0);
    const [todos, setTodos] = useState([]);
    // const calculation = useEffect(() => expensiveCalculation(count), []);
    // function expensiveCalculation(a){
    //     console.log("expensive calculation called")
    //     return a
    // }
    function updateCount(){
        setCount(count+1)
        console.log(count)
        setCount(count+1)
        console.log(count)
       
    }

    return <div> 
        <h1>Use Effect Hook Example</h1>
        <h1>Hi What is up {count}</h1>
        <button onClick={updateCount}>Update Count</button>
        </div>

}
export default UseEffectHook