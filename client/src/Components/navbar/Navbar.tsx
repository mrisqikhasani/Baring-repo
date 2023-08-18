import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  MenuItem,
  Container,
  Avatar,
  Tooltip,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import styles from "./Navbar.module.css";
import "./navbar.scss";

const pages = ["HomePage", "Movies", "Series", "News & Popular"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

const cleanedPages = pages.map((page) =>
  page
    .replace(/\s+/g, "-")
    .replace(/[^a-zA-Z0-9-]/g, "")
    .toLowerCase()
);

cleanedPages[3] = cleanedPages[3].replace("--", "");

function Navbar() {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);
  const [scrolled, setScrolled] = useState(false);

  const location = useLocation();

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleScroll = () => {
    if (window.scrollY > 200) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <AppBar
      position="fixed"
      color="transparent"
      style={{
        backgroundColor: scrolled ? "#212121" : "transparent",
        transition: "background-color 0.3s ease-in-out",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "Fredoka",
              fontSize: 45,
              fontWeight: 600,
              color: "#DB0000",
              textDecoration: "none",
              textShadow:
                "-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000",
            }}
          >
            BARING
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            component="a"
            href="/"
            sx={{
              mr: 2,
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
              fontFamily: "Fredoka",
              fontSize: 45,
              fontWeight: 600,
              color: "#DB0000",
              textDecoration: "none",
              textShadow:
                "-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000",
            }}
          >
            BARING
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page, index) => (
              <Typography
                key={page}
                onClick={handleCloseNavMenu}
                variant="button"
                component={Link}
                to={
                  cleanedPages[index] === "homepage"
                    ? "/"
                    : `/${cleanedPages[index]}`
                }
                sx={{
                  my: 2,
                  mx: 2,
                  fontFamily: "Fredoka",
                  fontSize: 16,
                  fontWeight: 500,
                  color: "white",
                  display: "block",
                  transition: "color 0.3s",
                  "&:hover": {
                    color: [
                      "homepage",
                      "series",
                      "movies",
                      "news-popular",
                    ].includes(cleanedPages[index])
                      ? "#DB0000"
                      : "white",
                  },
                  ...(location.pathname ===
                    (cleanedPages[index] === "homepage"
                      ? "/"
                      : `/${cleanedPages[index]}`) && {
                    color: "#DB0000",
                  }),
                }}
              >
                {page}
              </Typography>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;
