import React from "react";
import UseContextContent from './UseContextContent';
import UseRefContent from './UseRefContent';
import CheckTimer from './CheckTimer';
import BodyContent from './BodyContent';
import Student from './Student';
import List from './List';
import ClickEventButton from './ClickEvent';
import OnChangeEvent from './OnChangeEvent';
import UseState from './UseStateContent';
import StateOfObject from './StateOfObject';
import AddListOfFood from './AddListOfFood';
import ListOfObject from './ListOfObject';
import TodoList from './TodoList';
import Timer from './Timer';
import ReactUseEffect from './ReactUseEffect';
import FetchPost from './FetchPost';
import PortfolioProject from "./PortfolioProject";
function Home(){
    const employees=[
        {id:1,name:"Susan Paudel",salary:120000},
        {id:2,name:"Ram Rai",salary:10000},
        {id:3,name:"Saroj Team",salary:40000},
        {id:4,name:"Alish Rai",salary:1000},
    ];
    return(
        <>
    <BodyContent/>
    <hr/>
    <Student name="Susan Paudel" age={30} address="hetauda" isStudent={true}/>
    <br/>
    <Student />
    <hr/>
    {employees.length>0 ?  <List employees={employees}/> :''}
    <hr/>
    <ClickEventButton/>
    <hr/>
    <UseState/>
    <hr/>
    <OnChangeEvent/>
    <hr/>
    <StateOfObject/>
    <hr/>
    <AddListOfFood/>
    <hr/>
    <ListOfObject/>
    <hr/>
    <TodoList/>
    <hr/>
    <ReactUseEffect/>
    <hr/>
    <Timer/>
    <hr/>
    <UseContextContent/>
    <hr/> 
    <UseRefContent/>
    <hr/>
    <CheckTimer/>
    <hr/>
    <FetchPost></FetchPost>
    <hr/>
    <PortfolioProject/>
    </>
    )
}

export default Home