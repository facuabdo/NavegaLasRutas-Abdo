import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { NavBar } from "./components/NavBar/NavBar";

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <NavBar />
        <Routes>
          <Route
            path="/"
            element={<ItemListContainer title="aca irian los items" />}
          />
          <Route path="*" element={<h1>404</h1>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
