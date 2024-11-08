import React,{useRef} from 'react';

function UseRefContent(){

    const useref=useRef("");


    const handleClick=()=>{
        if(useref.current.style.background==="red"){
            useref.current.focus();
            useref.current.style.background="white";
        }else{
        useref.current.focus();
        useref.current.style.background="red";
        }
       
    }

    return(
      <>
      <h1>UseRef Content</h1>
      <input ref={useref}></input>
      <button onClick={()=>handleClick()}>Click Me</button>
      </>
    );
}
export default UseRefContent