import React from "react";
import { Link } from "react-router-dom";

function CategoryItem({ item }) {
  return (
    <div className="card">
      <div className="card-image waves-effect waves-block waves-light">
        <img src={item.strCategoryThumb} alt={item.strCategory} />
      </div>
      <div className="card-content">
        <span className="card-title activator grey-text text-darken-4">
          <b>{item.strCategory}</b>
        </span>
        <div className="card__descr">
          <p>{item.strCategoryDescription.slice(0, 66)}...</p>
        </div>
        <Link to={`/${item.strCategory}`}>Ингридиенты</Link>
      </div>
    </div>
  );
}

export default CategoryItem;
