import  propTypes  from "prop-types"
function Student(prop){
    return(
       <div className="text-center">
       <h1>Prop Example</h1>
       <p>Full Name = {prop.name}</p> 
       <p>Age = {prop.age}</p>       
       <p>Address = {prop.address}</p> 
       <p>Is Student = {prop.isStudent?"Yes":'No'}</p> 
       </div>
    );
}

Student.propTypes={
    name: propTypes.string,
    age: propTypes.number,
    address: propTypes.string,
    isStudent: propTypes.bool,
}

Student.defaultProps={
    name:"Susan",
    age:20,
    address:"nepal"
}
export default Student