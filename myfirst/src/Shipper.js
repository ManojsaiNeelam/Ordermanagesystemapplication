import { useState, useEffect} from "react";
function Shipper(){
    const[mynumber, setmynumber] = useState(0);
    const[Shippers, setShippers]=useState([]);

    const[shpId, setShpId]=useState("")

    // let sh=0;
const [count, setcount]=useState(0);
useEffect(()=>{
    setTimeout(() => {
        setcount((count)=> count+1);
    }, 1000);
        
    }, [count]);


    const handleClick=()=>{
        // sh=sh+1;
        // alert(sh);


    fetch("  https://localhost:7121/api/Shippers/GetAllShippers     ")

    .then((response)=>{
        if(!response.ok){
            alert('there is a network error please check!.')

        }
        return response.json();
    })
    .then((data)=>{
        setShippers(data);
        console.log(Shippers);
    })
    .catch((error)=>{
        console.error("Fetch error:", error);
    });
    };

    const handleGetResult=()=>{

       var url=new URL("  https://localhost:7121/api/Shippers/GetShipperDetailsById ")
       url.searchParams.append("iShipperId",shpId)

       fetch(url)
       .then((response)=>{
        if(!response.ok){
            alert("there is a network error, please check!")
        }
        return response.json();
       })
       .then((data)=>{
        setShippers(data);
        console.log(data);
       })
       .catch((error)=>{
        console.error("Fetch error:", error);
       });
    }
    const handleChange=(e)=>{
       setShpId(e.target.value); 
    }









    const handleMinus=()=>{
    if(mynumber>0)    
    setmynumber(mynumber-1);
    //alert(mynumber);
     }

     const handReact=()=>{
        setmynumber(mynumber+1);
        //alert(mynumber);
    }

    return(
        <div style={{display:'flex',
        justifyContent:'center',
        alignItems:'center',
        textAlign:'center',
        gap:'20px',
        padding:'20px',
        minHeight:'100vh',
        flexDirection:'column',
      backgroundColor:'lightblue'
        }}>
        <>
        <div style={{fontSize:"1.5rem", fontWeight:"bold"}}> This is Shipper Component..!  </div>

         <div style={{display:"flex", alignItems:"center", gap:"20px"}}>

        <label style={{fontWeight:"bold"}}>SHIPPER ID:</label>

        <input type="text" value={shpId} onChange={handleChange}
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

        >
            GetResult</button>
        <label style={{fontWeight:"bold"}}>{shpId}</label>
      </div>


        <button onClick={handleClick} 
         style={{
          padding: "10px 20px",
          borderRadius: "5px",
          backgroundColor: "#04AA6D",
          color: "#fff",
          border: "none",
          cursor: "pointer",
        }}> GetAllShippers</button>

        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <button onClick={handleMinus}
         style={{
            padding: "8px 15px",
            borderRadius: "5px",
            backgroundColor: "#f44336",
            color: "#fff",
            border: "none",
            cursor: "pointer",
          }}
        >  -</button> 
        <span style={{fontSize:"1.25rem", fontWeight:"bold"}}>{mynumber}</span>

        <button onClick={handReact}
          style={{
            padding: "8px 15px",
            borderRadius: "5px",
            backgroundColor: "#04AA6D",
            color: "#fff",
            border: "none",
            cursor: "pointer",
          }}
        
        > +</button></div>

        <label style={{fontStyle:"italic"}}> this is example {count}</label>

         <div style={{marginTop:"20px", width:"100%", maxWidth:"800px"}}>
        {Shippers.length>0 ?(
            <table border="1" cellPadding="10" cellSpacing="0"
            style={{borderCollapse:"collapse", width:"100%"}}>
                <thead>
                    <tr style={{background:"#ddd"}}>
                        <th>SHIPPER ID</th>
                        <th>SHIPPER NAME</th>
                        <th>PHONE</th>
                        
                    </tr>
                     </thead>
                        <tbody>
                       {Shippers.map ((shi, index)=>  (
                       <tr key={shi.shipperId}
                       style={{backgroundColor:index%2===0 ? "#ffffff":"#f2f2f2"}}>
                        <td>{shi.shipperId}</td>
                        <td>{shi.shipperName}</td>
                        <td>{shi.phone}</td>
                       
                       
                       </tr>
                       ))}
                    </tbody>

             </table>
             ):(
                <p>no shippers available</p>
             )}
   </div>
        
        </></div>
    );
}
export default Shipper;