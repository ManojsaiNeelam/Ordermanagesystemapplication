import React from "react";
import { useState } from "react";           //use state creation//
function One(){
    const[mynumber, setmynumber]=useState(0);
    let a=0;

    const handleClick=()=>{
        a=a+1;
        alert(a)
    }

                                                        //without h1 is used to create div//
    return (
       <> <div>                                     
            <h1> one is available</h1>
            <button onClick={handleClick}> javascript click button 
                useState
            </button>
        </div></>
    );
}
export default One;
