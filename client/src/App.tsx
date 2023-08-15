import { BrowserRouter as Router, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Listpage from "./pages/Listpage";
import "./App.scss";

function App() {
  return (
    <div className="App">
      {/* <Homepage /> */}
      <Listpage />
    </div>
  );
}

export default App;
