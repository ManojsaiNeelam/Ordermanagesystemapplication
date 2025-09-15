import { useEffect, useState } from "react";
function Country() {
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
       // alert(mynumber)
    }

     const handReact=()=>{
         setmynumber(mynumber+1);
       // alert(mynumber)
    }


    return (

        <><div> This is Country component!..</div>
            <button onClick={handleClick}> click Country me</button>
             <button onClick={handleMinus}> - </button> {mynumber}
             <button onClick={handReact}> + </button>
             <label> this is example {count}</label>
            </>


    );

}

export default Country;