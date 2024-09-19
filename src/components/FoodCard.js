import React from "react";

export default function FoodCard(props) {
    let {items} = props

   
  return (
    <div className="d-flex flex-column">
      
      
       
            <h4>{items.recipe.label}</h4>

            <img src={items.recipe.image} alt={items.recipe.label} />

            <p>Calories: {items.recipe.calories}</p>
           
    
    </div>
  );
}
