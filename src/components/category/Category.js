import React from "react";
import CategoryItem from "./CategoryItem.js";
import "./Category.css";

function Category({ category }) {
  return (
    <div className="category content">
      {category.map((item) => {
        return <CategoryItem key={item.idCategory} item={item} />;
      })}
    </div>
  );
}

export default Category;
