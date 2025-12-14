import { BrowserRouter as Router, Routes, Route } from "react-router";

import GoogleApiProvider from "./contexts/GoogleApi/Provider";

import HomePage from "./pages/HomePage";
import MapPage from "./pages/MapPage";

export default function App() {
  return (
    <Router>
      <GoogleApiProvider>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/map-example" element={<MapPage />} />
        </Routes>
      </GoogleApiProvider>
    </Router>
  );
}
