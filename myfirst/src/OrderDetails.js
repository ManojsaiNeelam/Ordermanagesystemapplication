import { useEffect, useState } from "react";
function OrderDetails(){
    const [mynumber, setmynumber]=useState(0);
    const[OrderDetails, setOrderDetails]=useState([]);

const[orDId , setOrdId]=useState("")

    // let or=0;
    const [count, setcount]=useState(0);
    useEffect(()=>{
        setTimeout(() => {
            setcount(()=>count+1);
            
        }, 1000);
    },[count]);

    const handleClick=()=>{
        // or=or+1;
        // alert(or);
    fetch("   https://localhost:7121/api/OrderDetails/GetALlOrderdetails         ")
    .then((response)=>{
        if(!response.ok){
            alert('there is a network error please check!.')
        }
        return response.json();
    })
    .then((data)=>{
        setOrderDetails(data);
        console.log(OrderDetails);
    })
    .catch((error)=>{
        console.error("Fetch error:",error);
    });
    };

    const handleGetResult=()=>
  {
    // Request url preparation
    var url=new URL(" https://localhost:7121/api/OrderDetails/GetOrderdetailsbyId ")
    url.searchParams.append("iOrderdetailId",  orDId  )

    fetch(url)
      .then((response) => {
        if (!response.ok) {
          alert("There is a network error, please check!");
        }
        return response.json();
      })
      .then((data) => {
        setOrderDetails(data);  // Set the entire array of category objects
        console.log(data);     // Log the full data
      })
      .catch((error) => {
        console.error("Fetch error:", error);
      });
  }
  const handleChange=(e)=>{
    setOrdId(e.target.value);
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

    return (
      <div style={{display:'flex',
      justifyContent:'center',
      alignItems:'center',
      minHeight:'100vh',
      gap:'20px',
      padding:'20px',
      textAlign:'center',
      flexDirection:'column',
      backgroundColor:'lightblue',
      }}>

        <><div style={{fontSize:"1.5rem", fontWeight:"bold"}}>This is OrderDetails Component...!</div>

       <div style={{display:"flex", alignItems:"center", gap:"20px",

       }}>
        <label style={{fontWeight:"bold"}}>ORDERDETAIL ID:</label>

        <input type="text" value={ orDId} onChange={handleChange}
        style={{borderRadius:"8px",
          padding:"10px",
          boxShadow:"0 2px 5px rgba(0,0,0,0.1)",
          border:"1px solid #ccc",
          transition:"border-color 0.3s box-shadow 0.3s",
          width:"200px",
          outline:"none",

        }}
        onFocus={(e)=>(e.target.style.backgroundColor="#04AA6D")}
        onBlur={(e)=>(e.target.style.backgroundColor="#ccc")}/>

         <button onClick={handleGetResult}
         style={{backgroundColor:"#04AA6D",
          borderRadius:"5px",
          padding:"10px 20px",
          cursor:"pointer",
          border:"none",
          color:"#fff",
          transition:"background-color 0.3s"

         }} 
         onMouseOver={(e)=>(e.target.style.backgroundColor="#04AA6D")}
         onMouseOut={(e)=>(e.target.style.backgroundColor="#039f5b")}>GetResult</button>

          <label style={{fontWeight:"bold"}}>{ orDId}</label>
        </div>

        <button onClick={handleClick}
        style={{padding:"10px 20px",
          borderRadius:"5px",
          border:"none",
          cursor:"pointer",
          color:"#fff",
          backgroundColor:"#04AA6D",

        }}>GetAllorderdetails</button>
        <div style={{display:"flex", alignItems:"center", gap:"20px"}}>
        <button onClick={handleMinus} 
        style={{
          backgroundColor:"#f44336",
          color:"#fff",
          borderRadius:"5px",
          border:"none",
          padding:"8px 15px",

        }}> - </button> 

        <span style={{fontsize:"1.25rem", fontWeight:"bold"}}>{mynumber}</span>

        <button onClick={handReact} 
        style={{backgroundColor:"#04AA6D",
          borderRadius:"5px",
          border:"none",
          cursor:"pointer",
          padding:"8px 15px",
          color:"#fff",

        }}> + </button></div>

        <label style={{fontStyle:"italic"}}> this is example {count}</label>

        <div style={{marginTop:"20px", width:"100%", maxWidth:"800px"}}>
        {OrderDetails.length>0 ? (

            <table border="1" cellPadding="10" cellSpacing="0" 
            style={{borderCollapse:"collapse", width:"100%"}}>
                <thead>
                <tr style={{background:"#ddd"}}>
                    <th>ORDERDETAIL ID</th>
                    <th>ORDER ID </th>
                    <th>PRODUCT ID </th>
                    <th>QUANTITY</th>
                </tr>
                </thead>

                <tbody>
                    {OrderDetails.map((orderD, index)=>(
                        <tr key={orderD.orderDetailId} 
                        style={{backgroundColor:index %2===0 ? "#ffffff":"#f2f2f2"}}>
                            <td>{orderD.orderDetailId}</td>
                            <td>{orderD.orderId}</td>
                            <td>{orderD.productId}</td>
                          <td>{orderD.quantity}</td>
                        </tr>
                            ))}
                 
                </tbody>

            </table>
         ):(
            <p> no Orderdetails available</p>
              )}
        </div>
        </></div>
    );
}

export default OrderDetails;