import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Listpage from "./pages/Listpage";
import DetailsPage from "./pages/DetailsPage/DetailsPage";
import "./App.scss";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/series" element={<Listpage />} />
          <Route path="series/:id" element={<DetailsPage/>}></Route>
          <Route path="movies/:id" element={<DetailsPage/>}></Route>
        </Routes>
        
      </div>
    </Router>
  );
}

export default App;
