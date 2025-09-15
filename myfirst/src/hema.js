import { useState } from "react";

function Hemanth(){
const[text,settext]=useState("ashok");
const [textColor, setTextColor] = useState("black");




    return (
        <>
        <div>
            <h1> this is Hemnath {text}</h1>
            <button   type="button" onClick={() =>settext("rajitha")}> onClick</button>
            <button type="button" onClick={() =>settext("Lavanya")  }> change</button>
            <button type="button" onClick={()=>settext("Rohith")}>Real</button>
            <button type="button" 
               style={{ backgroundColor: "violet" }}
               onClick={() => {
                    settext("Rajamogili");
                    setTextColor("yellow");
                }}
                
             >count</button>
        </div>
        </>

    );
}
export default Hemanth;