import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import MoreInfoItem from "./MoreInfoItem";

function MoreInfo() {
  const [info, setInfo] = useState([]);
  let more = useParams();
  const getMoreInfo = () => {
    axios(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${more.id}`
    ).then(({ data }) => setInfo(data.meals));
  };

  useEffect(() => {
    getMoreInfo();
  }, [more]);

  return (
    <div className="content">
      {info.length ? (
        info.map((item) => {
          return <MoreInfoItem key={item.idMeal} item={item} />;
        })
      ) : (
        <div className="progress container">
          <div className="indeterminate"></div>
        </div>
      )}
    </div>
  );
}

export default MoreInfo;
