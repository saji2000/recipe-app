import React from "react";
import { Link } from "react-router-dom";
import BasicMenu from "./BasicMenu";
import { AppBar, Box, Toolbar, Typography, Button } from "@mui/material";

const Navbar = () => {
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="fixed" sx={{ zIndex: 5000 }}>
          <Toolbar sx={{ backgroundColor: "black", color: "white" }}>
            <BasicMenu />
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Recipes App
            </Typography>
            <Link to="/auth">
              <Button sx={{ color: "white" }}>Login</Button>
            </Link>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
};

export default Navbar;
