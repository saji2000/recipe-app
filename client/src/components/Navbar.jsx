import React from "react";
import { Link } from "react-router-dom";
import BasicMenu from "./BasicMenu";
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Button,
  useTheme,
} from "@mui/material";

const Navbar = ({ toggleTheme }) => {
  const theme = useTheme();

  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="fixed">
          <Toolbar
            sx={{
              backgroundColor: theme.palette.secondary.main,
              color: theme.palette.text.main,
            }}
          >
            <BasicMenu toggleTheme={toggleTheme} />
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Recipes App
            </Typography>
            <Link to="/auth">
              <Button variant="contained" color="button">
                Login
              </Button>
            </Link>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
};

export default Navbar;
