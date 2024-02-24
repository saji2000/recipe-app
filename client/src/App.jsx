import { useEffect, useState } from "react";
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
  const prefersDark =
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches;

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = (e) => {
      setTheme(e.matches ? "dark" : "light");
    };

    mediaQuery.addEventListener("change", handleChange);

    return () => mediaQuery.addEventListener("change", handleChange);
  }, []);
  const [theme, setTheme] = useState(prefersDark ? dark : light);
  // const [theme, setTheme] = useState(light);

  const toggleTheme = () => {
    setTheme(theme === light ? dark : light);
  };

  return (
    <div className="App">
      <ThemeProvider theme={createTheme(theme)}>
        <Router>
          <Navbar sx={{ paddingTop: "10em" }} toggleTheme={toggleTheme} />
          <div className="main-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/auth" element={<Auth />} />
              <Route path="/create-recipe" element={<CreateRecipe />} />
              <Route path="/saved-recipes" element={<SavedRecipes />} />
            </Routes>
          </div>
        </Router>
      </ThemeProvider>
    </div>
  );
}

export default App;
