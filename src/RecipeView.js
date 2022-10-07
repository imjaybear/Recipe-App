import React from "react";

function RecipeView({ recipe, index, deleteRecipe }) {
  return (
    <tr key={index}>
      <td>{recipe && recipe.name}</td>
      <td>{recipe && recipe.cuisine}</td>
      <td><img alt={recipe && recipe.photo} className="photo" src={recipe && recipe.photo} /></td>
      <td><p>{(recipe && recipe.ingredients)}</p></td>
      <td><p>{(recipe && recipe.preparation)}</p></td>
      <td><button name="delete" onClick={deleteRecipe}>Delete</button></td>
    </tr>
  );
}

export default RecipeView;