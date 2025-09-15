// import React, { useState } from "react";

// // Functional Component
// function LoginPage() {
//   // State to hold form inputs
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [message, setMessage] = useState("");

//   // Handle form submission
//   const handleSubmit = (e) => {
//     e.preventDefault();  // Prevent page reload

//     // Dummy validation (you can replace with API call)
//     if (username === "admin" && password === "admin") {
//       setMessage("Login successful!");
//     } else {
//       setMessage("Invalid username or password.");
//     }
//   };

//   return (
//     <div style={{ maxWidth: "300px", margin: "50px auto" }}>
//       <h2>Login</h2>

//       <form onSubmit={handleSubmit}>
//         {/* Username Input */}
//         <div>
//           <label>Username:</label><br />
//           <input
//             type="text"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//             required
//           />
//         </div>

//         {/* Password Input */}
//         <div style={{ marginTop: "10px" }}>
//           <label>Password:</label><br />
//           <input
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />
//         </div>

//         {/* Submit Button */}
//         <div style={{ marginTop: "20px" }}>
//           <button type="submit">Login</button>
//         </div>
//       </form>

//       {/* Show message */}
//       {message && <p style={{ marginTop: "20px" }}>{message}</p>}
//     </div>
//   );
// }

// export default LoginPage;
