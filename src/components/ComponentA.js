import React from 'react';
import ComponentB from './ComponentB';

function ComponentA(){
    return (<>
    <div className="border p-3">
       <p>Component A</p>
       <ComponentB/>
    </div>
    </>);
}
export default ComponentA