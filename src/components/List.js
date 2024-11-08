function List(props){
    // const fruits=["apple",'orange','pineapple','canberry'];
    // var listItems=fruits.map(fruit=><li>{fruit}</li>);
    // return (
    //     <>
    //     <div className="text-center">
    //     <h2>Lists</h2>
    //   <ul>
    //     {listItems}
    //   </ul>
    //   </div>
    //   <hr/>
    //   </>
    // );

    //object
    const employees=props.employees;
    var listOfEmloyee=employees.map(employee=> <li key={employee.id}>The employee name is {employee.name} with salary of {employee.salary} monthly.</li>);

    return(<ol>{listOfEmloyee}</ol>)
}
export default List