import "./App.css";
import { useState, useEffect } from "react";
import FoodCard from "./components/FoodCard";

function App() {
  const [recipes, setRecipes] = useState([]);
  function fetchData() {
    fetch(
      "https://api.edamam.com/search?q=fish&app_id=6ae7ec68&app_key=2ee3bf2f7b70505f13d38a7ce852408b&from=0&to=10&calories=591-722&health=alcohol-free"
    )
      .then((res) => res.json())
      .then((data) => {
        setRecipes(data.hits);
      });
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="App d-flex justify-content-around flex-wrap ">
      {recipes.map((recipe) => {
        return(
          
          <FoodCard items={recipe}></FoodCard>

        )
      })}
    </div>
  );
}

export default App;
