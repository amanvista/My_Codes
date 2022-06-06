import { useState,useEffect, useRef } from "react";

function UseRefHook(){
    const [name, setName] = useState('Aman')
    const renderCount = useRef(0)
    const inputRef = useRef()
    const prevName = useRef()
    useEffect(()=>{
        prevName.current = name 
    })
    function myFunction(){
        inputRef.current.focus()
    }
    return <div> 
        <input ref = {inputRef} value={name} onChange={e=>setName(e.target.value)}/>
        <h1>My Name is {name}</h1>
        <p>I rendered {renderCount.current} times</p>
        <p>Previous Name is: {prevName.current}</p>
        <button onClick = {myFunction}> Click Me</button>
        </div>

}
export default UseRefHook