import { BrowserRouter as Router, Routes, Route } from "react-router";

import GoogleApiProvider from "./contexts/GoogleApi/Provider";

import HomePage from "./pages/HomePage";
import MapPage from "./pages/MapPage";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <GoogleApiProvider>
          <Route path="/map-example" element={<MapPage />} />
        </GoogleApiProvider>
      </Routes>
    </Router>
  );
}
