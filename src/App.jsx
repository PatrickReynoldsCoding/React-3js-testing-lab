import { useState, useEffect } from "react";

import "./App.css";
import { createScene } from "./functions/createScene";
createScene();

function App() {
  return (
    <div className="App">
      <canvas id="bg"></canvas>
    </div>
  );
}

export default App;
