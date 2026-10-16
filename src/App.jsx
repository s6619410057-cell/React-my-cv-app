import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import Contract from "./pages/Contract";
import About from "./pages/About";

export default function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contract" element={<Contract />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </>
  )
}
