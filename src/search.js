import { useState } from 'react';
import axios from 'axios';

const URL = 'https://themealdb.com/api/json/v1/1/search.php?s=';

export default function Search() {
  const [items, setItems] = useState([]);
  const [query, setQuery] = useState('');
  const [submit, setSubmit] = useState(false);
  const [isLoading, setisLoading] = useState(true);

  function back() {
    setSubmit(false);
    setisLoading(true);
    setQuery('');
  }

  function handleSubmit(e) {
    console.log(query);
    setSubmit(true);

    const address = URL + query;

    axios
      .get(address)
      .then((response) => {
        console.log(response.data);
        setItems(response.data.meals);
        setisLoading(false);
      })
      .catch((error) => {
        alert(error);
      });
  }
  if (submit) {
    if (isLoading) {
      return <p>Loading...</p>;
    } else
      return (
        <div className="results">
          <button onClick={back}>Back</button>
          {items.map((item) => (
            <div>
              <h3>{item.strMeal}</h3>
            </div>
          ))}
        </div>
      );
  } else
    return (
      <div>
        <form onSubmit={handleSubmit} className="searchBar">
          <label>Search</label>
          <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} />
          <button>Search</button>
        </form>
      </div>
    );
}
