import { useState } from "react";

function Raj() {
  const [name, setName] = useState(0);

  const handleClick = () => {
    setName(name + 1);
    alert(name + 1);  // Show the updated value immediately
  };

  return (
    <div>
      This is useState: {name}
      <br />
      <button onClick={handleClick}>Change</button>
    </div>
  );
}

export default Raj;
