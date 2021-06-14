import { useState } from "react";

function App() {
  const [clickCount, setClickCount] = useState(0);
  const incrementCounter = () => setClickCount(clickCount + 1);

  return (
    <div onClick={incrementCounter} className="App">
      you clicked {clickCount} times
    </div>
  );
}

export default App;
