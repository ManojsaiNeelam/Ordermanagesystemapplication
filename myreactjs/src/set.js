import { useEffect, useState } from "react";

function Section(){
   
const[count, setcount]=useState(0);


useEffect(()=>{
    setTimeout(() => {
         setcount((count)=>count+1);
    }, 1000);
},[count]);


  
return (
    <>
    <div>
        <h1>this is section {count}</h1>
    
    
    </div>
    </>
)


}
export default Section;