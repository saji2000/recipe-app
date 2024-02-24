import { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Menu, MenuItem, Switch, useTheme } from "@mui/material";
import { ModeNight, MoreVert } from "@mui/icons-material";

export default function BasicMenu({ toggleTheme }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const theme = useTheme();

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        sx={{ color: theme.palette.text.main }}
      >
        <MoreVert />
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={handleClose}>
          <Link to="/">Home</Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link to="/create-recipe">Create Recipe</Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link to="/saved-recipes">Saved Recipes</Link>
        </MenuItem>
        <MenuItem>
          <ModeNight />
          <Switch onClick={toggleTheme} />
        </MenuItem>
      </Menu>
    </div>
  );
}
