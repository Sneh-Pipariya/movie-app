import * as React from "react";
import { useState } from "react";
import movieData from "../movieData.json";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import DataGrid from "./DataGrid";
import DetailedGridData from "./DetailedGridData.js";
import { TextField } from "@mui/material";
import RatingDataTest from "./RatingDataTest.js";

import RatingData from "./RatingData.js";
const drawerWidth = 240;
// const navItems = ["Movies", "Rating", "R-rated"];

function Header(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);
  const [filteredData, setFilteredData] = useState(movieData);
  const [showSection, setShowSection] = useState(0);
  console.log({ movieData });

  const handleSearch = (event) => {
    setFilteredData(
      movieData.filter((name) =>
        name.title.toLowerCase().includes(event.target.value.toLowerCase())
      )
    );
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        Movie App
      </Typography>
      <Divider />
      <List>
        {["Movie", "Rating", "R-rated"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar component="nav">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>

          {/* <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItems.map((item) => (
              <Button key={item} sx={{ color: "#fff" }}>
                {item}
              </Button>
            ))}
          </Box> */}

          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            <Button sx={{ color: "#fff" }} onClick={() => setShowSection(0)}>
              Movie
            </Button>
          </Box>
          {showSection === 0 && <DataGrid myMovieData={filteredData} />}

          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            <Button sx={{ color: "#fff" }} onClick={() => setShowSection(1)}>
              Rating
            </Button>
          </Box>
          {showSection === 1 && <RatingData movieData={movieData} />}
          {/* {openGrid && <RatingDataTest movieData={movieData} />} */}

          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            <Button sx={{ color: "#fff" }} onClick={() => setShowSection(2)}>
              Detail
            </Button>
          </Box>
          {showSection === 2 && <DetailedGridData movieData={movieData} />}

          <TextField
            sx={{
              marginLeft: "10rem",
              border: "1px solid darkGrey",
              background: "white",
            }}
            id="filled-search"
            onChange={handleSearch}
            type="search"
            variant="filled"
            label="Enter Movie Name"
          />
        </Toolbar>
      </AppBar>

      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>

      {/* Main content  */}
      <Box component="main">
        <DataGrid myMovieData={filteredData} />
      </Box>
    </Box>
  );
}

Header.propTypes = {
  window: PropTypes.func,
};

export default Header;
