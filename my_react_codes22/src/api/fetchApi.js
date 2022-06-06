

import {useEffect, useState} from 'react'
let url = 'https://jsonplaceholder.typicode.com/posts'

let website = 'https://jsonplaceholder.typicode.com/'

function FetchApi(){
    let [data, setData] = useState([])
    useEffect(callApi,[])


    function callApi(){
        fetch(url).then((res)=>res.json().then((data)=>{
            //console.log("hi")
            setData(data)
        
        })).catch((error)=>{
            console.log(error)
        })
        
    }
    console.log(data)
    return <h1>
        API Method
        {data.map((element)=>{
        return <div>
            {/* <h2 key={element.id}>{element.id}</h2> */}
            <table border="1">
            <tr><td>{element.id}</td> <td>{element.title}</td><td>{element.body}</td></tr>
            </table>
            
            </div>})}
        
        </h1>
}
export default FetchApi