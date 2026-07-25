// Import Route and our components
import { Route, Routes } from "react-router-dom";
import Currencies from "./pages/Currencies";

import Price from "./pages/Price.jsx";
import Nav from "./components/Nav.jsx";

export default function App () {
  // We will use the Route component, path attribute, and element attribute to specify each route.
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<h1>Home Page</h1>}/>
        <Route path="/currencies" element={<Currencies/>}/>
        <Route path="/price/:symbol" element={<Price/>}/>
      </Routes>
    </div>
  );
}