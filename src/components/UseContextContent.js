import React,{useState,createContext} from 'react';
import ComponentA from './ComponentA';

export const UserContext=createContext("Hello");

function UseContextContent(){
    
    const [user,setUser]=useState("Susan");
   return(

    <>
    <h1>Use Context</h1>
    <div className="border p-3">
        <UserContext.Provider value={user}>
            <p>Hello {user}</p>
            <ComponentA/>
       </UserContext.Provider>
    </div>
    
    </>
   );
}

export default UseContextContent;