import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { light, dark } from "./theme";
import Home from "./pages/Home";
import Auth from "./pages/Auth";
import CreateRecipe from "./pages/CreateRecipe";
import SavedRecipes from "./pages/SavedRecipes";
import Navbar from "./components/Navbar";

import "./App.css";

function App() {
  const [theme, setTheme] = useState(light);

  return (
    <div className="App">
      <ThemeProvider theme={createTheme(theme)}>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/create-recipe" element={<CreateRecipe />} />
            <Route path="/saved-recipes" element={<SavedRecipes />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </div>
  );
}

export default App;
