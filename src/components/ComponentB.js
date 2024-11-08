import React,{useContext} from 'react';
import { UserContext } from './UseContextContent';
function ComponentB(){

    const user=useContext(UserContext);
    return (<>
        <div className="border p-3">
        <p>Component B</p>
            <p>Bye {user}</p>
           
        </div>
        </>);
}
export default ComponentB