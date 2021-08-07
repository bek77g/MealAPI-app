import React from "react";
import { Link } from "react-router-dom";

function IngridientItem({ item, name }) {
  return (
    <div className="card">
      <div className="card-image waves-effect waves-block waves-light">
        <img src={item.strMealThumb} alt={item.strMeal} />
      </div>
      <div className="card-content">
        <span className="card-title activator grey-text text-darken-4">
          <b>{item.strMeal}</b>
        </span>
        <Link to={`/${name}/${item.idMeal}`}>Подробнее</Link>
      </div>
    </div>
  );
}

export default IngridientItem;
