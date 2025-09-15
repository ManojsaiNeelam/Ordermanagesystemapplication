import { useState, useEffect } from "react";

function Customer() {
  const [mynumber, setMynumber] = useState(0);
  const [customers, setCustomers] = useState([]);
  const [cusId, setCusId] = useState("");
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000);

    return () => clearTimeout(timer); // Cleanup timer
  }, [count]);

  const handleClick = () => {
    fetch("https://localhost:7121/api/Customers/GetAllCustomers")
      .then((response) => {
        if (!response.ok) {
          alert("There is a network error, please check!");
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setCustomers(data);
        console.log(data); // Log the correct data
      })
      .catch((error) => {
        console.error("Fetch error:", error);
      });
  };

  const handleGetResult = () => {
    const url = new URL("https://localhost:7121/api/Customers/GetCustomerdetailsbyID");
    url.searchParams.append("iCustomerId", cusId);

    fetch(url)
      .then((response) => {
        if (!response.ok) {
          alert("There is a network error, please check!");
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setCustomers(data);
        console.log(data);
      })
      .catch((error) => {
        console.error("Fetch error:", error);
      });
  };

  const handleChange = (e) => {
    setCusId(e.target.value);
  };

  const handleMinus = () => {
    if (mynumber > 0) {
      setMynumber((prev) => prev - 1);
    }
  };

  const handlePlus = () => {
    setMynumber((prev) => prev + 1);
  };

  return (
   
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent:"center",
        minHeight: "100vh",
        textAlign: "center",
        gap: "20px",
        padding: "20px",
        backgroundColor:'lightblue'
      }}
    >
       <>
       
      <div style={{fontSize:"1.5rem",fontWeight:"bold"}} >
        This is Customer Component..!</div>

      <div style={{display:"flex",alignItems:"center",gap:"20px"}}>
        <label style={{fontWeight:"bold"}}>CUSTOMER ID: </label>

        <input type="text" value={cusId} onChange={handleChange}
        style={{ padding: "10px ",
            borderRadius: "8px",
            border: "1px solid #ccc",
            boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
            transition: "border-color 0.3s, box-shadow 0.3s",
            width: "200px",
            outline: "none",
        }} 
        onFocus={(e)=> e.target.style.borderColor="#04AA6D"}
        onBlur={(e)=>e.target.style.borderColor="#ccc"}
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
          Get Result</button>
        <label style={{fontWeight:"bold"}}>{cusId}</label>
      </div>

      <button onClick={handleClick}
      style={{ backgroundColor: "#04AA6D",
            color: "#fff",
            padding: "10px 20px",
            borderRadius: "5px",
            border: "none",
            cursor: "pointer",
           
      }}>Get All Customers</button>

      <div style={{display:"flex",alignItems:"center",gap:"10px"}}>

        <button onClick={handleMinus} 
        style={{borderRadius:"5px",
          padding:"8px 15px", 
          backgroundColor:"#f44336",
          border:"none",
          color:"#fff",
          cursor:"pointer",}}>-</button> 

          <span style={{fontSize:"1.25rem", fontWeight:"bold"}}>{mynumber}</span>

        <button onClick={handlePlus}
        style={{padding:"8px 15px", 
          borderRadius:"5px",
          border:"none",
          color:"#fff",
          background:"#04AA6D",
          cursor:"pointer",
        }}>+</button>
      </div>

      <label style={{fontStyle:"italic"}}>This is example {count}</label>

      <div style={{ marginTop: "20px",width:"100%",maxWidth:"800px" }}>
        {customers.length > 0 ? (
          <table border="1" 
          cellPadding="10" 
          cellSpacing="0"
          style={{borderCollapse:"collapse",width:"100%"}}>
            <thead>
              <tr style={{background:"#ddd"}}>
                <th>CUSTOMER ID</th>
                <th>CUSTOMER NAME</th>
                <th>CONTACT NAME</th>
                <th>ADDRESS</th>
                <th>CITY</th>
                <th>POSTAL CODE</th>
                <th>COUNTRY</th>
              </tr>
            </thead>
            <tbody>
              {customers.map((cus,index) => (
                <tr key={cus.customerId}
                style={{backgroundColor:index%2===0? "#ffffff":"#f2f2f2"}}>
                  <td>{cus.customerId}</td>
                  <td>{cus.customerName}</td>
                  <td>{cus.contactName}</td>
                  <td>{cus.address}</td>
                  <td>{cus.city}</td>
                  <td>{cus.postalCode}</td>
                  <td>{cus.country}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>No customer available</p>
        )}
      </div>
      </>
      
    </div>
  );
}

export default Customer;
