import "./App.css";

import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { NavBar } from "./components/NavBar/NavBar";

function App() {
  return (
    <div className="container">
      <NavBar />
      <ItemListContainer title="aca irian los items" />
    </div>
  );
}

export default App;
