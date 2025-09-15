import React from "react";
import { useEffect, useState } from "react";
function App() {
     const [mynumber, setmynumber] = useState(0);
    let b = 0;

    const [count,setcount]= useState(0);
    useEffect(()=>{
        setTimeout(() => {
            setcount(()=>count+1);
            
        }, 1000);
    },[count]);

    const handleClick = () => {
        b = b + 1;
        alert(b)

    }
 const handleMinus=()=>{
    if(mynumber>0)    
    setmynumber(mynumber-1);
   }

     const handReact=()=>{
         setmynumber(mynumber+1);
       
    }


  return (
        <><div>
      <h2>Image from external link</h2>
      <img
        src="    https://www.almanac.com/sites/default/files/image_nodes/oriental-lily.jpg         "
        alt="External Example"
        width="300"
        height="200"
      />
    </div>
    <div>
       
      <button onClick={handleClick}>Click  lilly flower</button>
      <button onClick={handleMinus}>-</button> {mynumber} 
      <button onClick={handReact}>+</button>
    
    </div></>
  );
}


export default App;
