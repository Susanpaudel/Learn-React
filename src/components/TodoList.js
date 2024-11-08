import React, {useState} from 'react';
function TodoList(){
    const [personalInfos,setPersonalInfos]=useState([{
      Name:"Susan Paudel",
      Address:"Heatuda",
      Number:"980000000",
      Country:"Nepal",
      Gender:"Male",
      Interest:["Singing","Dancing"]
    }]);
    const [name,setName]=useState("");
    const [address,setAddress]=useState("");
    const [number,setNumber]=useState("");
    const [country,setCountry]=useState("");
    const [gender,setGender]=useState("");
    const [interest,setInterest]=useState([]);

    const CheckInterest=(e)=>{
        const takeValue=e.target.value;
        setInterest((i)=>
            i.includes(takeValue)?i.filter((j)=>j!==takeValue):[...i,takeValue]
        );
    };

    const GoUp=(index)=>{
       
        if(index>0){
            const InitialValue=[...personalInfos];
            [InitialValue[index],InitialValue[index-1]]=[InitialValue[index-1],InitialValue[index]];
            setPersonalInfos(InitialValue);
        }else{
            alert('No data to move up');
        }
        
    }
    const GoDown=(index)=>{
       
        if(index<personalInfos.length-1){
            const InitialValue=[...personalInfos];
            [InitialValue[index],InitialValue[index+1]]=[InitialValue[index+1],InitialValue[index]];
            setPersonalInfos(InitialValue);
           
        }else{
            alert('No data to move down');
        }
        
    }
    const AddData=()=>{
        if(name && address && number && country && gender && interest.length){
            var newObjectData={
                Name: name,
                Address: address,
                Number: number,
                Country:country,
                Gender:gender,
                Interest:interest
            }
            setPersonalInfos(p=>[...p,newObjectData]);

            setAddress('');
            setName('');
            setCountry('');
            setInterest([]);
            setNumber('');
            setGender('');
        }else{
            alert('Please Select All Input fields');
        }
    }
    const DeleteData=(data)=>{
       setPersonalInfos((p)=>p.filter((_,index)=>index!==data));
    }
    return(
        <>
        <div className='row'>
            <div className='col-12'>
              <h1>Todo list of personal Information</h1>
            </div>
            <div className='col-2'>
            <label>Name</label>
            <input type='text' className='form-control' onChange={(e)=>setName(e.target.value)} value={name} placeholder='Enter Full Name'/>
            </div>
            <div className='col-2'>
                <label>Address</label>
                <input type='text' className='form-control' onChange={(e)=>setAddress(e.target.value)} value={address} placeholder='Address'/>
                </div>
                <div className='col-2'>
                <label>Number</label>
                <input type='tel' className='form-control' onChange={(e)=>setNumber(e.target.value)} value={number} placeholder='Number'/>
                </div>
                <div className='col-2'>
                <label>Country</label>
                <select onChange={(e)=>setCountry(e.target.value)} value={country} className='form-control'>
                <option value="" disabled>--Select Country--</option>
                <option value="Nepal" >Nepal</option>
                <option value="Uk" >Uk</option>
                <option value="India">India</option>
                </select>
                </div>
                <div className='col-1'>
                    <label>
                        Gender
                    </label>
                    <div className="form-check">
                    <input className="form-check-input" type="radio" value='Male' checked={gender==='Male'} onChange={(e)=>setGender(e.target.value)} name="flexRadioDefault" id="flexRadioDefault1"/>
                    <label className="form-check-label" htmlFor="flexRadioDefault1">
                        Male
                    </label>
                    </div>
                    <div className="form-check">
                    <input className="form-check-input" type="radio" value="Female" checked={gender==='Female'} onChange={(e)=>setGender(e.target.value)} name="flexRadioDefault" id="flexRadioDefault2"/>
                    <label className="form-check-label" htmlFor="flexRadioDefault2">
                        Female
                    </label>
                    </div>
                </div>
                <div className='col-1'>
                    <label>
                        Interest
                    </label>
                    <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="Singing" checked={interest.includes('Singing')} onChange={CheckInterest} id="flexCheckDefault6"/>
                    <label className="form-check-label" htmlFor="flexCheckDefault6">
                        Singing
                    </label>
                    </div>
                    <div className="form-check">
                    <input className="form-check-input" type="checkbox" checked={interest.includes('Dancing')} onChange={CheckInterest} value="Dancing" id="flexCheckChecked7"/>
                    <label className="form-check-label" htmlFor="flexCheckChecked7">
                        Dancing
                    </label>
                    </div>
                </div>
                <div className='col-2'>
                    <button className='btn btn-primary' onClick={AddData}>Add Data</button>
                </div>
                <div className='col-12'>
                <table className="table">
                    <thead>
                        <tr>
                        <th scope="col">#</th>
                        <th scope="col">Full Name</th>
                        <th scope="col">Address</th>
                        <th scope="col">Phone Number</th>
                        <th scope="col">Country</th>
                        <th scope="col">Gender</th>
                        <th scope="col">Interest</th>
                        <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {personalInfos.map((info,i)=>(
                            <tr key={i}>
                            <th scope="row">{i+1}</th>
                            <td>{info.Name}</td>
                            <td>{info.Address}</td>
                            <td>{info.Number}</td>
                            <td>{info.Country}</td>
                            <td>{info.Gender}</td>
                            <td>{info.Interest.join(' ,')}</td>
                            <td><button onClick={()=>DeleteData(i)} className='btn btn-danger'>Delete</button>
                                <button onClick={()=>GoUp(i)} className='btn btn-primary'>&#x2191;</button>
                                <button onClick={()=>GoDown(i)} className='btn btn-primary'>&#x2193;</button>
                            </td>
                            </tr>
                        ))}
                       
                       
                    </tbody>
                    </table>
                </div>
        </div>
       
        
       
       
        
        </>
    );
}

export default TodoList