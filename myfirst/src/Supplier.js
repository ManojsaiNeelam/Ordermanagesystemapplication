import { useState, useEffect} from "react";
function Supplier(){
    const [mynumber,setmynumber]=useState(0);

    const[Suppliers, setSuppliers]=useState([]);

    const[supId ,  setSupId]=useState("")
    //let su=0;
const [count, setcount]=useState(0);
useEffect(()=>{
    setTimeout(() => {
        setcount((count)=>count+1);
    }, 1000);
        
    }, [count]);


    const handleClick=()=>{
   fetch("   https://localhost:7121/api/Suppliers/GetAllSuppliers      ")
.then((response)=>{

    if(!response.ok)
    {
alert('there is a network error please check!.')
    }
    return response.json();
})
.then((data)=>{
setSuppliers(data);
console.log(Suppliers);
})
.catch((error)=>{
    console.error("Fetch error:",error);
});
}

const handleGetResult=()=>
  {
    // Request url preparation
    var url=new URL("  https://localhost:7121/api/Suppliers/GetSupplierDetailsbyID ")
    url.searchParams.append("iSupplierID"  , supId )

    fetch(url)
      .then((response) => {
        if (!response.ok) {
          alert("There is a network error, please check!");
        }
        return response.json();
      })
      .then((data) => {
        setSuppliers(data);  // Set the entire array of category objects
        console.log(data);     // Log the full data
      })
      .catch((error) => {
        console.error("Fetch error:", error);
      });
  }
  const handleChange=(e)=>{
    setSupId(e.target.value);
  }


    const handleMinus=()=>{
    if(mynumber>0)    
    setmynumber(mynumber-1);
    //alert(mynumber);
     }
     
    const handlePlus=()=>{
        setmynumber(mynumber+1);
        // alert(mynumber);
    }


    return (
      <div style={{display:'flex',
      justifyContent:'center',
      alignItems:'center',
      minHeight:'100vh',
      gap:'20px',
      padding:'20px',
      textAlign:'center',
      flexDirection:'column',
      backgroundColor:'lightblue'
      }}>
        <><div style={{fontSize:"1.5rem", fontWeight:"bold"}}> This is Supplier Component...!  </div>

        <div style={{display:"flex", alignItems:"center", gap:"20px"}}>

        <label style={{fontWeight:"bold"}}>SUPPLIER ID:</label>

        <input type="text" value={supId} onChange={handleChange}
          style={{
            padding: "10px",
            borderRadius: "8px",
            border: "1px solid #ccc",
            boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
            transition: "border-color 0.3s, box-shadow 0.3s",
            width: "200px",
            outline: "none",
          }}
          onFocus={(e) => (e.target.style.borderColor = "#04AA6D")}
          onBlur={(e) => (e.target.style.borderColor = "#ccc")}
        
        /> 
        <button onClick={handleGetResult}
          style={{
            backgroundColor: "#04AA6D",
            color: "#fff",
            padding: "8px 15px",
            borderRadius: "5px",
            border: "none",
            cursor: "pointer",
            transition: "background-color 0.3s",
          }}
          onMouseOver={(e) => (e.target.style.backgroundColor = "#039f5b")}
          onMouseOut={(e) => (e.target.style.backgroundColor = "#04AA6D")}

        >GetResult</button>
        <label style={{fontWeight:"bold"}}>{supId}</label>
      </div>



        <button onClick={handleClick}
         style={{
          padding: "10px 20px",
          borderRadius: "5px",
          backgroundColor: "#04AA6D",
          color: "#fff",
          border: "none",
          cursor: "pointer",
        }}
        > GetALLSuppliers</button>
        <div>
        <button onClick={handleMinus}
          style={{
            padding: "8px 15px",
            borderRadius: "5px",
            backgroundColor: "#f44336",
            color: "#fff",
            border: "none",
            cursor: "pointer",
          }}
        > -</button>

        <span style={{fontSize:"1.25rem", fontWeight:"bold"}}>{mynumber}</span>

         <button onClick={handlePlus}
          style={{
            padding: "8px 15px",
            borderRadius: "5px",
            backgroundColor: "#04AA6D",
            color: "#fff",
            border: "none",
            cursor: "pointer",
          }}
         > +</button></div>

        <label  style={{fontStyle:"italic"}}>this is example{count}</label>

         <div style={{marginTop:"20px", width:"100%", maxWidth:"800px"}}>
        {Suppliers.length>0 ?(
            <table border="1" cellPadding="10" cellSpacing="0"
            style={{borderCollapse:"collapse", width:"100%"}}>
                <thead>
                    <tr style={{background:"#ddd"}}>
                        <th>SUPPLIER ID</th>
                        <th>SUPPLIER NAME</th>
                        <th>CONTACT NAME</th>
                        <th>ADDRESS</th>
                        <th>CITY</th>
                        <th>POSTAL CODE</th>
                        <th>COUNTRY</th>
                        <th>PHONE</th>
                    </tr>
                     </thead>
                      <tbody>
                       {Suppliers.map ((sup, index)=>  (
                       <tr key={sup.supplierId}
                       style={{backgroundColor:index%2===0 ? "#ffffff":"#f2f2f2"}}>
                        <td>{sup.supplierId}</td>
                        <td>{sup.supplierName}</td>
                        <td>{sup.contactName}</td>
                        <td>{sup.aaddress}</td>
                        <td>{sup.city}</td>
                        <td>{sup.postalCode}</td>
                        <td>{sup.country}</td>
                        <td>{sup.phone}</td>
                       </tr>
                       ))}
                    </tbody>

             </table>
             ):(
                <p>no suppliers available</p>
             )}
   </div>

        </></div>
    );
}
export default Supplier;