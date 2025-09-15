import { useEffect, useState } from "react";
function Order(){
 const [mynumber,setmynumber]=useState(0);
 const[orders, setOrders]=useState([]);

 const[orId, setOrId]=useState("")
    // let o=0;

    const [count, setcount]=useState(0);
    useEffect(()=>{
        setTimeout(() => {
            setcount((count)=>count+1);
            
        }, 1000);
    },[count]);

    const handleClick=()=>{
        // o=o+1;
        // alert(o);
    fetch("https://localhost:7121/api/Orders/GetAllOrders")
    .then((response)=>{
        if(!response.ok){
            alert('there is a network error please check!.')
        }
    return response.json();

    })
    .then((data)=>{
        setOrders(data);
        console.log(orders);

    })
    .catch((error)=>{
        console.error("Fetch error:", error);
        
    });
    
    };
    const handleGetResult=()=>
  {
    // Request url preparation
    var url=new URL("https://localhost:7121/api/Orders/GetOrdersbyId")
    url.searchParams.append("iOrderId",orId)

    fetch(url)
      .then((response) => {
        if (!response.ok) {
          alert("There is a network error, please check!");
        }
        return response.json();
      })
      .then((data) => {
        setOrders(data);  // Set the entire array of category objects
        console.log(data);     // Log the full data
      })
      .catch((error) => {
        console.error("Fetch error:", error);
      });
  }
  const handleChange=(e)=>{
    setOrId(e.target.value);
  }

      const handleMinus=()=>{
    if(mynumber>0)    
    setmynumber(mynumber-1);
    //alert(mynumber);
     }

        const handReact=()=>{
            setmynumber(mynumber+1);
            // alert(mynumber);
    }
    return(
        <div style={{display:'flex',
        justifyContent:'center',
        alignItems:'center',
        minHeight:'100vh',
        textAlign:'center',
        gap:'20px',
        padding:'20px', 
         backgroundColor:'lightblue',

        flexDirection:'column'}}>

        <><div style={{fontSize:"1.5rem", fontWeight:"bold"}}> This is Order Component...!  </div>

        <div  style={{display:"flex",
                alignItems:"center",
                gap:"20px",
                
            }}>
            <label style={{fontWeight:"bold"}}>ORDER ID:</label>

            <input type="text" value={orId} onChange={handleChange} 
            style={{padding:"10px",
                borderRadius:"8px",
                border:"1px solid #ccc",
                boxShadow:"0 2px 5px rgba(0,0,0,0.1)",
                transition:"border-color  0.3s box-shadow 0.3s",
                width:"200px",
                outline:"none",

            }}
            onFocus={(e)=> e.target.style.borderColor="#04AA6D"}
            onBlur={(e)=>e.target.style.borderColor="#ccc"}/>

            <button onClick={handleGetResult}
            style={{backgroundColor:"#04AA6D",
                color:"#fff",
                borderRadius:"5px",
                border:"none",
                padding:"8px 15px",
                cursor:"pointer",
                transition:"background-color:0.3s",
            }}
            onmouseover={(e)=>(e.target.style.backgroundColor="#039f5b")}
            onMouseOut={(e)=>(e.target.style.backgroundColor="#04AA6D")}>GetResult</button>

            <label style={{fontWeight:"bold"}}>{orId}</label>
        </div>
        <button onClick={handleClick}
        style={{
            backgroundColor:"#04AA6D",
            color:"#fff",
            border:"none",
            borderRadius:"5px",
            padding:"10px 20px",
            cursor:"pointer",

        }}>GetAllOrders</button>
        <div style={{display:"flex", gap:"20px", alignItems:"center"}}>
        <button onClick={handleMinus}
        style={{borderRadius:"5px",
            color:"#fff",
            backgroundColor:"#f44336",
            border:"none",
            padding:"8px 15px",
            cursor:"pointer",

        }} >  - </button>

        <span style={{fontSize:"1.25rem", fontWeight:"bold"}}>{mynumber}</span>

        <button onClick={handReact}  style={{
            backgroundColor:"#04AA6D",
            padding:"8px 15px",
            border:"none",
            cursor:"pointer",
            borderRadius:"5px"}}> + </button>
            </div>

        <label style={{fontStyle:"italic"}}>this is example {count}</label>


        <div style={{ marginTop:"20px", width:"100%", maxWidth:"800px"}}>
            {orders.length>0 ? (
                <table border="1" cellPadding="10"  cellSpacing="0" 
                style={{borderCollapse:"collapse",width:"100%"}}>
                    <thead>
                        <tr style={{background:"#ddd"}}>
                            <th>ORDER ID</th>
                            <th>CUSTOMER ID</th>
                            <th>EMPLOYEE ID</th>
                            <th>ORDER DATE</th>
                            <th>SHIPPER ID</th>
                        </tr>
                    </thead>

                    <tbody>
                    {orders.map((ord, index)=>(
                        <tr key={ord.orderId}
                        style={{backgroundColor:index%2===0 ? "#ffffff":"#f2f2f2"}}>
                            <td>{ord.orderId}</td>
                            <td>{ord.customerId}</td>
                            <td>{ord.employeeId}</td>
                            <td>{ord.orderDate}</td>
                            <td>{ord.shipperId}</td>
                        </tr>

                    ))}

                    </tbody>
                </table>
            ):(
                <p>No orders available</p>
            )}
             
        </div>

        </></div>
    );
}
export default Order;