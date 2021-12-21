import { useState, useEffect } from 'react';
import axios from 'axios';
import Results from './results';
import { Link } from 'react-router-dom';
import uuid from 'react-uuid';

const URL = 'https://themealdb.com/api/json/v1/1/search.php?s=';
const RAND_URL = 'https://www.themealdb.com/api/json/v1/1/random.php';

export default function Search() {
  const [query, setQuery] = useState('');
  const [randomMeal, setRandomMeal] = useState([]);

  useEffect(() => {
    const address = RAND_URL;
    axios
      .get(address)
      .then((response) => {
        setRandomMeal(response.data.meals);
      })
      .catch((error) => {
        alert(error);
      });
  }, []);

  return (
    <div>
      <form className="searchBar">
        <label>
          <h1>Recipe search</h1>
        </label>
        <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} />
        <Link to="/results">
          <button
            onClick={() => {
              sessionStorage.setItem('query', query);
            }}
          >
            Search
          </button>
        </Link>
      </form>
      {randomMeal.map((item) => (
        <div key={uuid()}>
          <h2>{item.strMeal}</h2>
          <div id="ingredientPage">
            <table id="ingredients">
              <tbody>
                <tr>
                  <th colSpan="2">Ingredients</th>
                </tr>
                <tr>
                  <td>{item.strIngredient1}</td>
                  <td>{item.strstrMeasure1}</td>
                </tr>
                <tr>
                  <td>{item.strIngredient2}</td>
                  <td>{item.strstrMeasure2}</td>
                </tr>
                <tr>
                  <td>{item.strIngredient3}</td>
                  <td>{item.strMeasure3}</td>
                </tr>
                <tr>
                  <td>{item.strIngredient4}</td>
                  <td>{item.strMeasure4}</td>
                </tr>
                <tr>
                  <td>{item.strIngredient5}</td>
                  <td>{item.strMeasure5}</td>
                </tr>
                <tr>
                  <td>{item.strIngredient6}</td>
                  <td>{item.strMeasure6}</td>
                </tr>
                <tr>
                  <td>{item.strIngredient7}</td>
                  <td>{item.strMeasure7}</td>
                </tr>
                <tr>
                  <td>{item.strIngredient8}</td>
                  <td>{item.strMeasure8}</td>
                </tr>
                <tr>
                  <td>{item.strIngredient9}</td>
                  <td>{item.strMeasure9}</td>
                </tr>
                <tr>
                  <td>{item.strIngredient10}</td>
                  <td>{item.strMeasure10}</td>
                </tr>
                <tr>
                  <td>{item.strIngredient11}</td>
                  <td>{item.strMeasure11}</td>
                </tr>
                <tr>
                  <td>{item.strIngredient12}</td>
                  <td>{item.strMeasure12}</td>
                </tr>
                <tr>
                  <td>{item.strIngredient13}</td>
                  <td>{item.strMeasure13}</td>
                </tr>
                <tr>
                  <td>{item.strIngredient14}</td>
                  <td>{item.strMeasure14}</td>
                </tr>
                <tr>
                  <td>{item.strIngredient15}</td>
                  <td>{item.strMeasure15}</td>
                </tr>
                <tr>
                  <td>{item.strIngredient16}</td>
                  <td>{item.strMeasure16}</td>
                </tr>
                <tr>
                  <td>{item.strIngredient17}</td>
                  <td>{item.strMeasure17}</td>
                </tr>
                <tr>
                  <td>{item.strIngredient18}</td>
                  <td>{item.strMeasure18}</td>
                </tr>
                <tr>
                  <td>{item.strIngredient19}</td>
                  <td>{item.strMeasure19}</td>
                </tr>
                <tr>
                  <td>{item.strIngredient20}</td>
                  <td>{item.strMeasure20}</td>
                </tr>
              </tbody>
            </table>
            <p id="instructions">{item.strInstructions}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
