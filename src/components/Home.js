import React,{useState} from 'react';
import Weather from './Weather'

const Home=()=>{
const [country,setCountry]=useState('');
const [check,setCheck]=useState(true);
const [showCountry,setShowCountry]=useState(false);
const [places,setPlaces]=useState([])

const clickHandler=(evt)=>{
    evt.preventDefault();
    setShowCountry(true);
    setPlaces(state=>[...state,country])

}

    return (
        <>
        <div className="container search">
      <form>
      <input placeholder="Enter Place" style={{width:"20%"}} value={country} onChange={(event)=>{
        setShowCountry(false)
      if(event.target.value.length===0){
       setCheck(true)
      }
      else{
        setCheck(false)
      }
        setCountry(event.target.value)}} style={{ width: "60%",padding:"5px",borderRadius: "4px"}}/>
        <button onClick={clickHandler} className="btn btn-success m-5" disabled={check} > Check Weather </button>
        </form>
        </div>
       {places.map((v)=>{
       // console.log(v)
       return (
        <>
        
        {showCountry? <Weather data={v}/>:null}
        </>
       )
        
       })}
       {}
        </>
    )
}

export default Home;