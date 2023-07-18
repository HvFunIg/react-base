import React, { useState } from "react";
import Counter from "./components/Counter";
import ClassCounter from "./components/ClassCounter";

function App() {
  const [value,setValue] = useState(0);


  return (
    <div className="App">
      <Counter/>
      <ClassCounter/>
      <Counter/>
    </div>
  );
}

export default App;
