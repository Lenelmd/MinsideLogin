import "./App.css";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Minside from "./pages/Minside";
import Nybruker from "./pages/Nybruker";
import Glemtpassord from "./pages/Glemtpassord";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/minside" element={<Minside />} />
        <Route path="/register" element={<Nybruker />} />
        <Route path="/forget" element={<Glemtpassord />} />
      </Routes>
    </>
  );
}

export default App;
