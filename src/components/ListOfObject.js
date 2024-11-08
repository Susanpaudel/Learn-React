import React,{useState} from 'react';

function ListOfObject(){
    
    const [car,setCar]=useState([{
        Model:"ford",
        Year:2002,
        Make:"lambo",
    }]);
    const [year,setYear]=useState();
    const [model,setModel]=useState();
    const [make,setMake]=useState();

    const CheckChangeEvent=()=>{
       if(make && model && make){
        var newData={
            Model:model,
            Year:year,
            Make:make,
           }
           setCar(c=>[...c,newData]);



           setYear('');
           setModel('');
           setMake('');
       }else{
        alert('Please fill all the fields');
       }
       
     
    }
    
    const DeleteListItem=(index)=>{
      setCar(c=>c.filter((_,item)=>item!==index));
    }

    return(
        <>
         <h1>List of Objects</h1>
         
         <ul>
            {
                car.map((data,index)=> <li key={index} onClick={()=>DeleteListItem(index)}>{data.Year} {data.Make} {data.Model}</li>)
            }
           
         </ul>
         <input type='text' placeholder='Make' value={make} onChange={(e)=>setMake(e.target.value)} />
         <input type="text" placeholder='Model'  value={model} onChange={(e)=>setModel(e.target.value)} />
         <input type="number" placeholder='Year'  value={year} onChange={(e)=>setYear(e.target.value)}/>
         <button onClick={CheckChangeEvent}>Add List</button>

        </>
        
        
    )
}
export default ListOfObject