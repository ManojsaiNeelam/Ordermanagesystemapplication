import { useEffect, useState } from "react";

function Category() {
  const [mynumber, setmynumber] = useState(0);
  const [categories, setCategories] = useState([]);
  const [count, setcount] = useState(0);
  const [catId, setCatId] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setcount((count) => count + 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [count]);

  const handleClick = () => {
    fetch("https://localhost:7121/api/Categories/GetAllCategories")
      .then((response) => {
        if (!response.ok) {
          alert("There is a network error, please check!");
        }
        return response.json();
      })
      .then((data) => {
        setCategories(data);
        console.log(data);
      })
      .catch((error) => {
        console.error("Fetch error:", error);
      });
  };

  const handleGetResult = () => {
    const url = new URL("https://localhost:7121/api/Categories/GetCategorydetailsbyId");
    url.searchParams.append("iCategoryId", catId);

    fetch(url)
      .then((response) => {
        if (!response.ok) {
          alert("There is a network error, please check!");
        }
        return response.json();
      })
      .then((data) => {
        setCategories(data);
        console.log(data);
      })
      .catch((error) => {
        console.error("Fetch error:", error);
      });
  };

  const handleChange = (e) => {
    setCatId(e.target.value);
  };

  const handleMinus = () => {
    if (mynumber > 0) setmynumber(mynumber - 1);
  };

  const handlePlus = () => {
    setmynumber(mynumber + 1);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        textAlign: "center",
        gap: "20px",
        backgroundColor: "lightblue",
        padding: "20px",
      }}
    >
      <div style={{ fontSize: "1.5rem", fontWeight: "bold" }}>
        This is Category Component....
      </div>

      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        
        <label style={{ fontWeight: "bold" }}>CATEGORY ID:</label>
        <input
          type="text"
          value={catId}
          onChange={handleChange}
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
        <button
          onClick={handleGetResult}
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
          Get Result
        </button>
        <label style={{ fontWeight: "bold" }}>{catId}</label>
      </div>

      <button
        onClick={handleClick}
        style={{
          padding: "10px 20px",
          borderRadius: "5px",
          backgroundColor: "#04AA6D",
          color: "#fff",
          border: "none",
          cursor: "pointer",
        }}
      >
        Get ALL Categories
      </button>

      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <button
          onClick={handleMinus}
          style={{
            padding: "8px 15px",
            borderRadius: "5px",
            backgroundColor: "#f44336",
            color: "#fff",
            border: "none",
            cursor: "pointer",
          }}
        >
          -
        </button>
        <span style={{ fontSize: "1.25rem", fontWeight: "bold" }}>{mynumber}</span>
        <button
          onClick={handlePlus}
          style={{
            padding: "8px 15px",
            borderRadius: "5px",
            backgroundColor: "#04AA6D",
            color: "#fff",
            border: "none",
            cursor: "pointer",
          }}
        >
          +
        </button>
      </div>

      <label style={{ fontStyle: "italic" }}>This is example count: {count}</label>

      <div style={{ marginTop: "20px", width: "100%", maxWidth: "800px" }}>
        {categories.length > 0 ? (
          <table
            border="1"
            cellPadding="10"
            cellSpacing="0"
            style={{ borderCollapse: "collapse", width: "100%" }}
          >
            <thead>
              <tr style={{ backgroundColor: "#ddd" }}>
                <th>CATEGORY ID</th>
                <th>CATEGORY NAME</th>
                <th>DESCRIPTION</th>
              </tr>
            </thead>

            <tbody>
              {categories.map((cat, index) => (
                <tr
                  key={cat.categoryId}
                  style={{
                    backgroundColor: index % 2 === 0 ? "#ffffff" : "#f2f2f2",
                  }}
                >
                  <td>{cat.categoryId}</td>
                  <td>{cat.categoryName}</td>
                  <td>{cat.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>No categories available. Click the button to load.</p>
        )}
      </div>
    </div>
  );
}

export default Category;
