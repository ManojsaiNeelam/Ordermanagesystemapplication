// import { useEffect, useState } from "react";

// function Category() {
//   const [mynumber, setmynumber] = useState(0);
//   const [categories, setCategories] = useState([]);
//   const [count, setcount] = useState(0);

//   useEffect(() => {
//     setTimeout(() => {
//       setcount((count) => count + 1);
//     }, 1000);
//   }, [count]);

//   const handleClick = () => {
//     fetch("https://localhost:7121/api/Categories/GetAllCategories")
//       .then((response) => {
//         if (!response.ok) {
//           alert("There is a network error, please check!");
//         }
//         return response.json();
//       })
//       .then((data) => {
//         setCategories(data);  // Set the entire array of category objects
//         console.log(data);     // Log the full data
//       })
//       .catch((error) => {
//         console.error("Fetch error:", error);
//       });
//   };

//   const handleMinus = () => {
//     if (mynumber > 0) setmynumber(mynumber - 1);
//   };

//   const handReact = () => {
//     setmynumber(mynumber + 1);
//   };

//   return (
//     <>
//       <div>This is Category Component....</div>

//       <button onClick={handleClick}>Get ALL Categories</button>
//       <button onClick={handleMinus}>-</button> {mynumber}
//       <button onClick={handReact}>+</button>
//       <label>This is example {count}</label>

//       <div style={{ marginTop: "20px" }}>
//         {categories.length > 0 ? (
//           <table border="1" cellPadding="10" cellSpacing="0">
//             <thead>
//               <tr>
//                 <th>Category ID</th>
//                 <th>Category Name</th>
//                 <th>Description</th>
//               </tr>
//             </thead>

//             <tbody>
//               {categories.map((cat) => (
//                 <tr key={cat.categoryId}>
//                   <td>{cat.categoryId}</td>
//                   <td>{cat.categoryName}</td>
//                   <td>{cat.description}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         ) : (
//           <p>No categories available. Click the button to load.</p>
//         )}
//       </div>
//     </>
//   );
// }

// export default Category;
