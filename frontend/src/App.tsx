import { BrowserRouter as Router, Routes, Route } from "react-router";

import HomePage from "./pages/HomePage";
import MapPage from "./pages/MapPage";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/map-example" element={<MapPage />} />
      </Routes>
    </Router>
  );
}
