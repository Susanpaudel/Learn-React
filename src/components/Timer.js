import React,{useState,useEffect} from 'react';

function Timer(){
  
   const [time,setTime]=useState("");
  
   const ClickTimer=()=>{
    const TaKeTime=new Date();
    setTime(`${TaKeTime.getHours()%12} : ${TaKeTime.getMinutes()}: ${TaKeTime.getSeconds()} ${TaKeTime.getHours()>12?"PM":"AM"}`)
   }
   useEffect(()=>{
       var timeInterval=setInterval(ClickTimer,1000);
       return ()=>clearInterval(timeInterval)
   },[time]);
   return(<>
   <h1>
    Timer Clock 
   </h1>
   <div className="timer">
    <p>{time}</p>
   </div>
   </>);
}

export default Timer;