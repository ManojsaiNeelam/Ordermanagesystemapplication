import {useState, useEffect} from "react";
function Employee(){

const [mynumber, setmynumber]=useState(0); //syntax//
const[Employees, setEmployees]=useState([]);

const[empId, setEmpId]=useState("")
    // let z=0;
    
 const [count, setcount]=useState(0); //syntax//

    useEffect(()=>{
        setTimeout(() => {
            setcount((Count)=>count+1);
        },1000);
            
        }, [count]);
   

    //functions//
    const handleClick=()=>{
        // z=z+1;
        // alert(z);
        fetch("https://localhost:7121/api/Employees/GetAllEmployees")
        .then((response)=>{
            if(!response.ok){
                alert('there is a network error please check!.')

            }
            return response.json();
        })
        .then((data)=>{
            setEmployees(data);
            console.log(Employees);
        })
        .catch((error)=>{
            console.error("Fetch error:" , error);
        });
    }

   const handleGetResult=()=>
  {
    // Request url preparation
    var url=new URL("https://localhost:7121/api/Employees/GetEmployeedetailsbyId")
    url.searchParams.append("iEmployeeId",empId)

    fetch(url)
      .then((response) => {
        if (!response.ok) {
          alert("There is a network error, please check!");
        }
        return response.json();
      })
      .then((data) => {
       setEmployees(data);  // Set the entire array of category objects
        console.log(data);     // Log the full data
      })
      .catch((error) => {
        console.error("Fetch error:", error);
      });
  }
  const handleChange=(e)=>{
    setEmpId(e.target.value);
  }

    
   const handleMinus=()=>{
    if(mynumber>0)    
    setmynumber(mynumber-1);
       // alert(mynumber)
    }
    const handReact=()=>{
        setmynumber(mynumber+1);
        // alert(mynumber);
    }


return(
    <div 
    style={{display:'flex',
    justifyContent:'center',
    alignItems:'center',
    minHeight:'100vh',
    textAlign:'center',
    gap:'20px',
    padding:'20px',
    backgroundColor:'lightblue',
    flexDirection:'column'}}>

    <>
    <div style={{fontSize:"1.5rem",fontWeight:"bold"}}>  This is Employee Component..! </div>

   <div style={{display:"flex",
            alignItems:"center",
             gap:"10px"}}>
            <label style={{fontWeight:"bold"}}>EMPLOYEE ID:</label>
            <input type="text" value={empId} onChange={handleChange} style={{padding:"10px",
                borderRadius:"8px",
                border:"1px solid #ccc",
                boxShadow:"0 2px 5px rgba(0,0,0,0.1)",
                width:"200px", 
                outline:"none", 
                transition:"border-color:o.3s box-shadow:0.3s",
            }}
            onFocus={(e)=>(e.target.style.borderColor="#04AA6D")}
            onBlur={(e)=>(e.target.style.borderColor="#ccc")}
            />
            <button onClick={handleGetResult} 
            style={{
                backgroundColor:"#04AA6D",
                padding:"8px 15px",
                color:"#ccc",
                borderRadius:"5px",
                border:"none",
                cursor:"pointer",
                transition:"background-color 0.3s box-shadow 0.3s",

                }}>GetResult</button>
            <label style={{fontWeight:"bold"}}>{empId}</label>
        </div>

            <button onClick={handleClick} style={{
             padding: "10px 20px",
          borderRadius: "5px",
          backgroundColor: "#04AA6D",
          color: "#fff",
          border: "none",
          cursor: "pointer",

            }}> GetAllEmployees </button>

            <div style={{display:"flex", alignItems:"center", gap:"10px"}}>
            <button onClick={handleMinus} style={{
                backgroundColor:"#f44336",
                color:"#ccc",
                padding:"8px 15px",
                borderRadius:"5px",
                cursor:"pointer",
                border:"none",

            }}>- </button>
            <span style={{fontSize:"1.25rem", fontWeight:"bold"}}> {mynumber}</span>
             <button onClick={handReact} style={{
            backgroundColor:"#04AA6D",
            color:"#ccc",
            padding:"8px 15px",
            border:"none",
            cursor:"pointer",
            borderRadius:"5px",
             }}>+ </button></div>

         <label style={{fontStyle:"italic"}}> this is example {count} </label>

            <div style={{marginTop:"20px", width:"100%", maxWidth:"800px"}}>
             {Employees.length>0 ?(
            <table border="1" cellPadding="10" cellSpacing="0" 
            style={{borderCollapse:"collapse", width:"100%"}}>
                <thead>
                    <tr style={{background:"#ddd"}}>
                        <th>EMPLOYEE ID</th>
                        <th>LAST NAME</th>
                        <th>FIRST NAME</th>
                        <th>BIRTH DATE</th>
                        <th>PHOTO</th>
                        <th>NOTES</th>
                    </tr>
                     </thead>
                    <tbody>
                       {Employees.map ((emp, index) =>  (
                       <tr key={emp.employeeId} 
                       style={{backgroundColor:index%2===0 ? "#ffff":"#f2f2f2"}}>
                        <td>{emp.employeeId}</td>
                        <td>{emp.lastName}</td>
                        <td>{emp.firstName}</td>
                        <td>{emp.birthDate}</td>
                        <td>{emp.photo}</td>
                        <td>{emp.notes}</td>
                       </tr>
                       ))}
                    </tbody>

             </table>
             ):(
                <p>no employee available</p>
             )}
    </div>
             

    </></div>
 );
        
}

    export default Employee;
    

    