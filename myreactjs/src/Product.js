import {useState, useEffect} from "react";
function Product(){
const [mynumber, setmynumber]=useState(0);
const[Products, setProducts]=useState([]);

const[proId, setProId]=useState("")

    // let p=0;
const [count, setcount]=useState(0);

useEffect(()=>{
    setTimeout(() => {
        setcount((count)=>count+1);
    },1000);

    }, [count]);


    const handleClick=()=>{
        // p=p+1;
        // alert(p);
    fetch("   https://localhost:7121/api/Products/GetAllProducts  ")
    .then((response)=>{
        if(!response.ok){
            alert('there is a network error please check!.')
        }
        return response.json();
    })
    .then((data)=>{
        setProducts(data);
        console.log(Products);
    })
    .catch((error)=>{
        console.error("Fetch error:",error);
    });
    }

    
  const handleGetResult=()=>
  {
    // Request url preparation
    var url=new URL("https://localhost:7121/api/Products/GetProductsbyId ")
    url.searchParams.append("iProductID",proId)

    fetch(url)
      .then((response) => {
        if (!response.ok) {
          alert("There is a network error, please check!");
        }
        return response.json();
      })
      .then((data) => {
        setProducts(data);  
        console.log(data);     
      })
      .catch((error) => {
        console.error("Fetch error:", error);
      });
  }
  const handleChange=(e)=>{
   setProId(e.target.value);
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
    textAlign:'center',
    gap:'20px',
    padding:'20px',
    flexDirection:'column',
    backgroundColor:'lightblue'
    }}>
    <><div style={{ fontSize: "1.5rem", 
      fontWeight: "bold" }}>  This is Product Component..! </div>

    <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>

        <label style={{ fontWeight: "bold" }} >PRODUCT ID:</label>

        <input type="text" value={proId} onChange={handleChange}
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

        <label style={{fontWeight:"bold"}}>{proId}</label>
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
    > GetALLproduct </button>
    <div>
    <button onClick={handleMinus}
    style={{
      backgroundColor:"#f44336",
      color:"#fff",
      padding:"8px 15px",
      border:"none",
      borderRadius:"5px",
      cursor:"pointer",

    }}> - </button> 

    <span style={{fontSize:"1.25rem", fontWeight:"bold"}}>{mynumber}</span>

    <button onClick={handReact}
    style={{backgroundColor:"#04AA6D",
      border:"none",
      borderRadius:"5px",
      cursor:"pointer",
      padding:"8px 15px",
      color:"#fff",
    }}>+ </button></div>

     <label style={{fontStyle:"italic"}}> this is example {count} </label>

     <div style={{marginTop:"20px", width:"100%", maxWidth:"800px"}}>
        {Products.length>0 ?(
            <table border="1" cellPadding="10" cellSpacing="0"
            style={{borderCollapse:"collapse",width:"100%"}}>
                <thead>
                    <tr style={{background:"#ddd"}}>
                        <th>PRODUCT ID</th>
                        <th>PRODUCT NAME</th>
                        <th>SUPPLIER ID</th>
                        <th>CATEGORY ID</th>
                        <th>UNIT</th>
                        <th>PRICE</th>
                    </tr>
                     </thead>
                      <tbody>
                       {Products.map ((pro, index)=>  (
                       <tr key={pro.productId}
                       style={{backgroundColor:index%2===0 ?"#ffffff":"#f2f2f2"}}>
                        <td>{pro.productId}</td>
                        <td>{pro.productName}</td>
                        <td>{pro.supplierId}</td>
                        <td>{pro.categoryId}</td>
                        <td>{pro.unit}</td>
                        <td>{pro.price}</td>
                       </tr>
                       ))}
                    </tbody>

             </table>
             ):(
                <p>no product available</p>
             )}
    </div>

    </></div>
);

}
export default Product;
    

   