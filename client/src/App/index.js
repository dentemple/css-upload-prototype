import React, { useEffect } from "react";
import "./App.css";

function App() {
  useEffect(() => {
    fetch("/api/ping")
      .then(res => res.json())
      .then(json => void console.log("Connected to the server:", json));
  });

  return (
    <div className="App">
      <p>Home</p>
    </div>
  );
}

export default App;
