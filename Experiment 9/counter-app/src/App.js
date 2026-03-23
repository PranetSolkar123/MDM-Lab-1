import React, { useState, useEffect } from "react";

function App() {

  // Step 1: Create state for counter
  const [count, setCount] = useState(0);

  // Step 2: Side effect to update browser title
  useEffect(() => {
    document.title = `Count: ${count}`;
    console.log("Counter value changed:", count);
  }, [count]);

  // Step 3: UI of the app
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Simple Counter App</h2>
      <h1>{count}</h1>

      <button onClick={() => setCount(count + 1)}>Increment</button>
      &nbsp;&nbsp;
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      &nbsp;&nbsp;
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}

export default App;