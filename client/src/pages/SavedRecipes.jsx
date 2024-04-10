import { useEffect, useState } from "react";
import { useGetUser } from "../hooks/useGetUser.js";
import axios from "axios";

const savedRecipes = () => {
  const [savedRecipes, setSavedRecipes] = useState([]);
  const userId = useGetUser();

  useEffect(() => {
    const fetchSavedRecipe = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3003/recipes/savedRecipes/${userId}`
        );
        console.log(response.data);
        setSavedRecipes(response.data.recipes);
      } catch (err) {
        console.error(err);
      }
    };
    fetchSavedRecipe();
  }, []);

  return (
    <div>
      <h1>Saved Recipes</h1>
      <ul>
        {savedRecipes.map((recipe) => (
          <li key={recipe._id}>
            <div>
              <h2>{recipe.name}</h2>
            </div>
            <div>
              <p>{recipe.instructions}</p>
            </div>
            <img src={recipe.image} alt={recipe.name} />
            <p>Cooking time: {recipe.cookingTime} (minutes)</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default savedRecipes;
