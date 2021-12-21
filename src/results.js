import { useState, useEffect } from 'react';
import Recipe from './recipe';
import uuid from 'react-uuid';
import { useLocation } from 'react-router';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function Results() {
  const [items, setItems] = useState([]);
  const URL = 'https://themealdb.com/api/json/v1/1/search.php?s=';
  const address = URL + sessionStorage.getItem('query');

  useEffect(() => {
    axios
      .get(address)
      .then((response) => {
        setItems(response.data.meals);
      })
      .catch((error) => {
        alert(error);
      });
  }, []);

  return (
    <div className="results">
      {items.map((item) => (
        <div key={uuid()} className="items">
          <h3>{item.strMeal}</h3>
          <Link to="/recipe">
            <img
              src={item.strMealThumb}
              alt=""
              id="mealImg"
              onClick={() => {
                sessionStorage.setItem('item', JSON.stringify(item));
              }}
            />
          </Link>
        </div>
      ))}
    </div>
  );
}
