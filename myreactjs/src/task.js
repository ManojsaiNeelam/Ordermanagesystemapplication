import React from "react";
import { useState, useEffect } from "react";

function Task(){
    const [mynumber, setmynumber]=useState(0);
    const[count, setcount]=useState(0);
    useEffect(()=>{
        setTimeout(() => {
            setcount(()=>count+1);
            
        }, 1000);
    },[count]);
    //let z=0;                                          //usestate, useeffect work//
    const handleMinus=()=>{
        if(mynumber>0)
        setmynumber(mynumber-1);
        alert(mynumber);
    }
    const handReact=()=>{
        setmynumber(mynumber+1);
        alert(mynumber);
    }
    return (
        <>
        <div>
            <h1> this is task component...!</h1> 
            <button onClick={handleMinus}> usestate, useeffect -</button>{mynumber}
            <button onClick={handReact}> +</button> 
            <label>this is example {count}</label>

                 </div>
                 </>
    );
}
export default Task;