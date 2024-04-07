import { useEffect, useState } from "react";
import axios from "axios";

const Home = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3003/recipes");
        setRecipes(response.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchData();
  }, []);
  console.log(recipes);

  return (
    <div>
      <h1>Recipes</h1>
      <ul>
        {recipes.map((recipe) => (
          <li key={recipe._id}>
            <div>
              <h2>{recipe.name}</h2>
            </div>
            <div>
              <p>{recipe.instructions}</p>
            </div>
            <img src={recipe.image} alt={recipe.name} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
