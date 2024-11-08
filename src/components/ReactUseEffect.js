import React,{useState,useEffect} from "react";

function ReactUseEffect(){

    const[counter,setCounter]=useState(0);
 
    useEffect(()=>{
      document.title=`Counter ${counter}`
    },[counter]);

    const AddCount=()=>{
       setCounter(c=>c+1);
    }

    return(
        <>
        <h1>React use Effect</h1>
        <p>Counter : ${counter}</p>
        <button onClick={AddCount}>Add</button>
        
       </>
    )
}
export default ReactUseEffect