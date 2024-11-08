import React,{useState,useEffect} from 'react';

function CheckTimer(){
    
//     const [time,setTime]=useState(0);
//     const [isRunning,setIsRunning]=useState(false);

//     useEffect(()=>{
//         let interval;
//         if(isRunning){
//             interval=setInterval(()=>{
//                setTime((t)=>t + 1);
//             }, 1000);
//         }else if(!isRunning && time!==0){
//             clearInterval(interval); 
//         }
//         return ()=>clearInterval(interval);
//     },[time,isRunning])

//     const formatTime=(seconds)=>{
//       const hours=Math.floor(seconds/(60*60)); 
//       const minutes=Math.floor(seconds/60);
//       const secs=seconds%60;
//       return `${hours} : ${minutes} : ${secs}`;
//     };
   

    
//     return(
// <>
//  <p>{formatTime(time)}</p>
//  <button className='btn btn-primary' onClick={()=>setIsRunning(true)}>Start</button>
//  <button className='btn btn-primary' onClick={()=>setIsRunning(false)}>Stop</button>
//  <button className='btn btn-primary' onClick={()=>{setTime(0);setIsRunning(false);}}>Reset</button>
// </>
//     )


const [time,setTime]=useState(0);
const [isRunning,setIsRunning]=useState(false);

useEffect(()=>{
    let interval;
    if(isRunning){
        interval=setInterval(()=>{
           setTime((preTime)=>preTime+1)
        },1000);      
    }else if(!isRunning && time!==0){
        clearInterval(interval);
    }

    return ()=>clearInterval(interval);
},[time,isRunning]);

const formatTime=(second)=>{
    const secondTime=second%60;
    const minuteTime=Math.floor(second/60);
    const hourTime=Math.floor(second/(60*60));

    return `${hourTime} : ${minuteTime} : ${secondTime}`;
}

return (
   <>
   <p>{formatTime(time)}</p>
   <button className='btn btn-primary' onClick={()=>setIsRunning(true)} disabled={isRunning}>Start</button>
   <button className='btn btn-primary' onClick={()=>setIsRunning(false)} disabled={!isRunning}>Stop</button>
   <button className='btn btn-primary' onClick={()=>{setIsRunning(false);setTime(0);}} disabled={!time}>Reset</button>

   </>
);





}
export default CheckTimer;