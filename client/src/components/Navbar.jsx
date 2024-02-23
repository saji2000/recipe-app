import React from "react";
import { Link } from "react-router-dom";
import BasicMenu from "./BasicMenu";
import { AppBar, Box, Toolbar, Typography, Button } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

const Navbar = () => {
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar sx={{ backgroundColor: "black", color: "white" }}>
            <BasicMenu />
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              News
            </Typography>

            <Link to="/">Home</Link>
            <Link to="/create-recipe">Create Recipe</Link>
            <Link to="/saved-recipes">Saved Recipes</Link>
            <Link to="/auth">
              <Button color="inherit">Login</Button>
            </Link>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
};

export default Navbar;
