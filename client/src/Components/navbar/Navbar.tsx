import Search from "@mui/icons-material/Search";
import Notifications from "@mui/icons-material/Notifications";
import Account from "@mui/icons-material/AccountCircle";
import "./navbar.scss";

function Navbar() {
  return (
    <div>
      <nav>
          <a href="/" className="logo">
            Baring
          </a>
          <ul className="navList">
            <li>
              <a href="/" className="homepage" id="homepage">
                HomePage
              </a>
            </li>
            <li>
              <a href="/" className="movies" id="movies">
                Movies
              </a>
            </li>
            <li>
              <a href="/" className="series" id="series">
                Series
              </a>
            </li>
            <li>
              <a href="/" className="newpopular" id="newpopularge">
                News and Popular
              </a>
            </li>
          </ul>
          <ul className="iconList">
            <li>
              <a href="/">
                <Search sx={{ fontSize: 35 }} />
              </a>
            </li>
            <li>
              <a href="/">
                <Notifications sx={{ fontSize: 35 }} />
              </a>
            </li>
            <li>
              <a href="/">
                <Account sx={{ fontSize: 35 }} />
              </a>
            </li>
          </ul>
      </nav>
      <div className="line"></div>
    </div>
  );
}

export default Navbar;
