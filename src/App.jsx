import "./App.css";
import Header from "./components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Configurateur from "./components/Configurateur";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/Configurateur" element={<Configurateur />} />
      </Routes>
    </Router>
  );
}

export default App;
