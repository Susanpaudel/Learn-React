import profile from '../assests/images/photo.avif';
function ClickEvent(){
    const ClickEventData=()=>alert('hello you have been clicked');
    const ClickEventData2=(name)=>alert(`${name} does second click`);
    var count=0;
    const ClickEventData3=(name)=>{
        if(count<3){
            count+=1;
            alert(`${name} click ${count} time!`);
        }else{
            alert(`${name} stop clicking!`); 
        }
    }
    const ClickEventData4=(e)=>e.target.textContent="just Clicked";
    const ClickEventData5=(e)=>e.target.style.display="none";
    const styles={
      "height":"40px",
      "width":"auto",
    };
    return(
    <div className="mx-auto">
     <button className="btn btn-primary me-2" onClick={ClickEventData}>First Click</button>
     <button className="btn btn-primary me-2" onClick={()=>ClickEventData2("Susan")}>Second Click</button>
     <button className="btn btn-primary me-2" onClick={()=>ClickEventData3("Susan")}>Third Click</button>
     <button className="btn btn-primary me-2" onDoubleClick={(e)=>ClickEventData4(e)}>Fourth Click</button>
     <img src={profile} style={styles} onClick={(e)=>ClickEventData5(e)} alt="image"></img>
    </div>
    )
}
export default ClickEvent