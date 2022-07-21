import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import CoasterCard from "./components/CoasterCard";
import StateNav from "./components/StateNav";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/coasters" element={<CoasterCard />} />
      </Routes>
    </div>
  );
}

export default App;
