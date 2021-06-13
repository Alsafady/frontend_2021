import { useState } from "react";

function App() {
  const [clickCount, setClickCount] = useState(0);
  return <div className="App">you clicked {clickCount} times</div>;
}

export default App;
