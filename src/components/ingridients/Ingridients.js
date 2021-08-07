import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import IngridientItem from "./IngridientItem.js";

function Ingridients() {
  let category = useParams();
  const [ingridient, setIngridient] = useState([]);

  const getFullIngridients = () => {
    axios(
      `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category.name}`
    ).then(({ data }) => setIngridient(data.meals));
  };

  useEffect(() => {
    getFullIngridients();
  }, []);

  return (
    <div className="category container content">
      {ingridient.length ? (
        ingridient.map((item) => {
          return (
            <IngridientItem
              name={category.name}
              key={item.idMeal}
              item={item}
            />
          );
        })
      ) : (
        <div className="progress">
          <div className="indeterminate"></div>
        </div>
      )}
    </div>
  );
}

export default Ingridients;
