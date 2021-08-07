import React, { useState, useEffect } from "react";
import Category from "../category/Category.js";
import axios from "axios";

function Home() {
  const [category, setCategory] = useState([]);

  const getAllMealCategories = () => {
    axios("https://www.themealdb.com/api/json/v1/1/categories.php").then(
      ({ data }) => setCategory(data.categories)
    );
  };

  useEffect(() => {
    getAllMealCategories();
  }, []);

  return (
    <div className="container content">
      {category.length ? (
        <Category category={category} />
      ) : (
        <div className="progress">
          <div className="indeterminate"></div>
        </div>
      )}
    </div>
  );
}

export default Home;
