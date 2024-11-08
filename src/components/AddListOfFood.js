import React,{useState} from 'react';

function AddListOfFood(){
    const [food,setFood]=useState(['apple','bread']);

    const ClickEvent=()=>{
        var newdata=document.getElementById('food_name').value;
        document.getElementById('food_name').value='';
        setFood(f=>[...f,newdata]);
        
    }
    const DeleteEvent=(data)=>{
       var newData=food.filter((_,d)=>d!==data);
       setFood(newData);
    }
    return(
        <>
        <ul>
            {
                food.map((data,index)=><li key={index} >
                    {data} <span onClick={()=>DeleteEvent(index)}>Trash</span>
                </li>)
            }
        </ul>

        <input type="text" id="food_name"/>
        <button onClick={ClickEvent}>Add Food</button>
        </>
    )
}
export default AddListOfFood