import React, { useState } from "react";
import { Notifications, AccountCircle, Search } from "@mui/icons-material";
import { Container, Menu, MenuItem } from "@mui/material";
import "./navbar.scss";

function Navbar() {
  // handle dropdown
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  // handle animation search
  const [isSearchActive, setIsSearchActive] = useState(false);

  const handleMenusearch = () => {
    setIsSearchActive(!isSearchActive);
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Escape') {
      setIsSearchActive(false);
    }
  };

  return (
    <div>
      <Container maxWidth="lg">
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
            <li className="search-box">
              <div className="searchButton" onClick={handleMenusearch}>
                <Search sx={{ fontSize: 35 }} className="iconButton" />
              </div>
              <div
                className={`search-wrapper ${isSearchActive ? 'active' : ''}`}
              >
                <input
                  type="text"
                  className="search-input"
                  placeholder="Search"
                  onKeyDown={handleKeyPress}/>
              </div>
            </li>
            <li>
              <div>
                <Notifications sx={{ fontSize: 35 }} className="iconButton" />
              </div>
            </li>
            <li>
              <div className="icon-item" onClick={handleMenuOpen}>
                <AccountCircle sx={{ fontSize: 35 }} className="iconButton" />
              </div>
              <Menu
                className="Menu-icon"
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleMenuClose}
              >
                <MenuItem onClick={() => {}}>Settings</MenuItem>
                <MenuItem onClick={() => {}}>Logout</MenuItem>
              </Menu>
            </li>
          </ul>
        </nav>
      </Container>
      <div className="line"></div>
      <br />
    </div>
  );
}

export default Navbar;
