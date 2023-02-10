import react, { useState } from "react";
function Statedemo()
{
     const state=useState();
const[count,setCount]=useState(0);
 const IncNum=()=>{
 setCount(count+1);
 console.log("Clicked")
 }
 
 return(
<>
<h1>{count}</h1>
 <button onClick={IncNum}>Click</button>
 </>
 )
}
export default Statedemo;

