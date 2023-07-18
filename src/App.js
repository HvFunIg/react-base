import React, { useState } from "react";
import Counter from "./components/Counter";

function App() {
  const [value,setValue] = useState(0);


  return (
    <div className="App">
      <Counter/>
      <Counter/>
      <Counter/>
    </div>
  );
}

export default App;
