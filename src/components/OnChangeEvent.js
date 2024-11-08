import React,{useState} from 'react';

function OnChangeEvent(){
    const [name,setName]=useState("Guest");
    const [quantity,setQuantity]=useState(0);
    const [comment,setComment]=useState("");
    const [payment,setPayment]=useState();
    const [shipping,setShipping]=useState();
    const [interest,setInterest]=useState([]);
    const [color,setColor]=useState();

    const CheckName=(e)=>{
      setName(e.target.value);
    }
    const CheckQuantity=(e)=>{
        setQuantity(e.target.value);
      }

    const CheckComment=(e)=>{
        setComment(e.target.value);
    }
    const CheckPayment=(e)=>{
      setPayment(e.target.value);
    }
    const CheckShipping=(e)=>{
        setShipping(e.target.value);
    }
    const CheckColor=(e)=>{
        setColor(e.target.value);
    }

    const CheckInterest=(e)=>{
        const selectValue=e.target.value;
        setInterest((assignValue)=>assignValue.includes(selectValue)?
        assignValue.filter((data)=>data!==assignValue):[...assignValue,selectValue]);
    }
    return(
        <div>
            <h1>On Change Event</h1><br/>
            <input type="text" value={name} onChange={CheckName}/>
            <p>Name :{name}</p> 

            <input type="number" value={quantity} onChange={CheckQuantity}/>
            <p>quantity :{quantity}</p> 
            <textarea name="comment" placeholder='write a comment' onChange={CheckComment} value={comment}></textarea>
            <p>comment : {comment}</p>

            <select value={payment} onChange={CheckPayment}>
                <option value="" disabled>Select Payment Method</option>
                <option value="Cash">Cash</option>
                <option value="Master Card">Master Card</option>
                <option value="Online">Online</option>
            </select>
            <p>Payment:{payment}</p>

            <div className="form-check">
            <input className="form-check-input" type="radio" value="Pick Up" checked={shipping==="Pick Up"} id="flexCheckDefault" onChange={CheckShipping}/>
            <label className="form-check-label" htmlFor="flexCheckDefault">
               Pick Up
            </label>
            </div>
            <div className="form-check">
            <input className="form-check-input" type="radio" value="Delivery" checked={shipping==="Delivery"} id="flexCheckChecked1" onChange={CheckShipping} />
            <label className="form-check-label" htmlFor="flexCheckChecked1">
               Delivery
            </label>
            </div>
            <p>Shpping: {shipping}</p>

            <div className="form-check">
            <input className="form-check-input" type="checkbox" value="Singing" checked={interest.includes("Singing")} id="flexCheckDefault3" onChange={CheckInterest}/>
            <label className="form-check-label" htmlFor="flexCheckDefault3">
               Singing
            </label>
            </div>
            <div className="form-check">
            <input className="form-check-input" type="checkbox" value="Dancing" checked={interest.includes("Dancing")} id="flexCheckChecked4" onChange={CheckInterest} />
            <label className="form-check-label" htmlFor="flexCheckChecked4">
               Dancing
            </label>
            </div>
            <p>Interest: {interest.join(', ')}</p>

            <input type="color" value={color} onChange={CheckColor}></input>
            <p>Color Code : {color}</p>
        </div>
    )
}

export default OnChangeEvent