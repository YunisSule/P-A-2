import { useState } from 'react';
import axios from 'axios';
import Results from './results';

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

  function handleSubmit() {
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
    } else if (!items) {
      return (
        <div>
          <p>Couldn't find any recipes for {query}</p>
          <button onClick={back}>Back</button>
        </div>
      );
    } else return <Results items={items} />;
  } else
    return (
      <div>
        <form onSubmit={handleSubmit} className="searchBar">
          <label>
            <h1>Recipe search</h1>
          </label>
          <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} />
          <button>Search</button>
        </form>
      </div>
    );
}
