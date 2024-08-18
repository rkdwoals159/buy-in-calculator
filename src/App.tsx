import "./App.css";
import { Stack } from "./utils/stackflow";
import { GameStack } from "./utils/gameStackFlow";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Stack />} />
        <Route path="/:cardId" element={<Stack />} />
        <Route
          path="/game"
          element={<div>정상적인 경로가 아닙니다.</div>}
        ></Route>
        <Route path="/game/:cardId" element={<GameStack />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
