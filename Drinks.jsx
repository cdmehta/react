import React, { useState } from "react";
import { Link } from "react-router-dom";

function Drinks() {
  const [drinksList, setDrinksList] = useState([
    { id: 1, name: "cocktail" },
    { id: 2, name: "jamoon" },
    { id: 3, name: "vodka" },
  ]);

  return (
    <div className="container">
      <h1>Drinks</h1>
      {
        drinksList.map((item) => {
            return (
                <div>
                    <h1>{item.name}</h1>
                    <h4>Drink id: {item.id}</h4>
                    <Link to={`/drink/${item.id}`}>Go to drink</Link>
                </div>
            )
        })
      }
    </div>
  );
}

export default Drinks;
