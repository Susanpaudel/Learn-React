import React,{useState} from 'react';
function UseStateContent(){
  const [name,setName]=useState("Test");
  const handleClick=(e)=>{
    if(e.target.textContent==="Set Name"){
      setName('Susan');
      e.target.textContent="Unset Name";
    }else{
      setName('Test');
      e.target.textContent="Set Name";
    }
    
  }
  
  const [number,setNumber]=useState(0);
  
  const handleCounter=(action)=>{
    if(action==="add"){
      setNumber(number+1);
    }else if(action==="sub"){
      setNumber(number-1);
    }else{
      setNumber(0);
    }
  }
  return (
    <>
    <h1>Use State Hook</h1><br/>
    <p>Name : {name}</p>
    <button className='btn btn-primary' onClick={(e)=>handleClick(e)}>Set Name</button>
    <br/>
    <h3>Counter Values</h3>
    <p>Counter : {number}</p>
    <button className='btn btn-primary' onClick={()=>handleCounter('add')}>+</button>
    <button className='btn btn-primary' onClick={()=>handleCounter('sub')}>-</button>
    <button className='btn btn-primary' onClick={()=>handleCounter('reset')}>Reset</button>
    </>
  )
}
export default UseStateContent