import React from "react";
import "./MoreInfoItem.css";

function MoreInfoItem({ item }) {
  let ingredients = [];
  for (let j = 1; j <= 20; j++) {
    if (item["strIngredient" + j]) {
      ingredients.push(
        `${item["strIngredient" + j]} - ${item["strMeasure" + j]}`
      );
    } else {
      break;
    }
  }
  return (
    <div className="container">
      <div className="moreinfitem-cont">
        <div className="moreinfitem">
          <div className="moreinfitem__part1">
            <img src={item.strMealThumb} className="col s6" alt="Meal IMG" />
          </div>
          <div className="col s6">
            <h2 className="moreinfitem__name">
              <b>{item.strMeal}</b>
            </h2>
            <ul className="moreinfitem__info">
              <li className="col s4">
                <p>
                  <b>Area:</b>
                </p>
                <p>
                  <b>Category:</b>
                </p>
              </li>
              <li className="col s4">
                <p>{item.strArea}</p>
                <p>{item.strCategory}</p>
              </li>
            </ul>
            <iframe
              className="moreinditem__iframe"
              src={`https://www.youtube.com/embed/${item.strYoutube.slice(
                -11
              )}`}
              title="${obj.strMeal}"
              frameBorder="0"
              allowFullScreen
            />
          </div>
        </div>
        <div className="moreinfitem__table">
          <div className="moreinfitem__table-first">
            <h4>
              <b>Ingredients:</b>
            </h4>
            <ol className="moreinfitem__ingred">
              {ingredients.map((ingredient, idx) => {
                return <li key={idx}>{ingredient}</li>;
              })}
            </ol>
          </div>
          <div className="moreinfitem__table-second">
            <h4 className="moreinditem__proc">
              <b>Procedure:</b>
            </h4>
            <p>{item.strInstructions}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MoreInfoItem;
