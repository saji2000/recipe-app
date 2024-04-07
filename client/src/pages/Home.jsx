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

  return <div>Home</div>;
};

export default Home;
