import { useState} from "react";



function Rajitha(){
    const [name, setname]=useState(0);
    const handleClick=   ()=>   {
    setname(name+1);
    alert(name)

}
return (
    <>
    <div>
        <h1>this is usestae component...</h1>
        <button onClick={handleClick}>Change</button>
    </div>    
    </>
);
}
export default Rajitha;