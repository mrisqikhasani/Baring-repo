import Navbar from './Components/navbar/Navbar';
import Footer from './Components/footer/Footer';
import Trending from './Components/Trendings/Trendings';
import SectionMovie from './Components/SectionMovie/SectionMovie';
import "./App.scss"

function App() {
  return (
    <div className="App">
      {/* <Navbar /> */}
      <Trending />
      <SectionMovie/>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
