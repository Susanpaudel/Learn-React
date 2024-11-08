import React,{useState} from 'react';

function StateOfObject(){

    const [car,setCar]=useState({
      make:"mustang",
      model:'lambo',
      year:2002,
    });
   
    const handleChange=(action)=>(e)=>{
        if(action==="make"){
          setCar(c=>({...c,make:e.target.value})); 
        }else if(action==="model"){
            setCar(c=>({...c,model:e.target.value}));
        }else {
            setCar(c=>({...c,year:e.target.value})); 
        }
    }

    return(
        <>
        <h1>use of update function with spread operator by change the object values</h1>
         <p>I love car {car.make} of model {car.model} of year {car.year} </p>

         <input type="text" value={car.make} onChange={handleChange('make')}/>
         <input type="text" value={car.model} onChange={handleChange('model')}/>
         <input type="number" value={car.year} onChange={handleChange('year')}/>
        </>
       
          
    )
}
export default StateOfObject