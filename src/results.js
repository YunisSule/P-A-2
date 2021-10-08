import { useState } from 'react';
import Recipe from './recipe';
import uuid from 'react-uuid';

export default function Results(props) {
  const [selectedItem, setSelectedItem] = useState(null);

  function back() {
    setSelectedItem(null);
  }

  if (selectedItem != null) {
    return (
      <Recipe
        meal={selectedItem.strMeal}
        instructions={selectedItem.strInstructions}
        ing1={selectedItem.strIngredient1}
        ing2={selectedItem.strIngredient2}
        ing3={selectedItem.strIngredient3}
        ing4={selectedItem.strIngredient4}
        ing5={selectedItem.strIngredient5}
        ing6={selectedItem.strIngredient6}
        ing7={selectedItem.strIngredient7}
        ing8={selectedItem.strIngredient8}
        ing9={selectedItem.strIngredient9}
        ing10={selectedItem.strIngredient10}
        ing11={selectedItem.strIngredient11}
        ing12={selectedItem.strIngredient12}
        ing13={selectedItem.strIngredient13}
        ing14={selectedItem.strIngredient14}
        ing15={selectedItem.strIngredient15}
        ing16={selectedItem.strIngredient16}
        ing17={selectedItem.strIngredient17}
        ing18={selectedItem.strIngredient18}
        ing19={selectedItem.strIngredient19}
        ing20={selectedItem.strIngredient20}
        measure1={selectedItem.strMeasure1}
        measure2={selectedItem.strMeasure2}
        measure3={selectedItem.strMeasure3}
        measure4={selectedItem.strMeasure4}
        measure5={selectedItem.strMeasure5}
        measure6={selectedItem.strMeasure6}
        measure7={selectedItem.strMeasure7}
        measure8={selectedItem.strMeasure8}
        measure9={selectedItem.strMeasure9}
        measure10={selectedItem.strMeasure10}
        measure11={selectedItem.strMeasure11}
        measure12={selectedItem.strMeasure12}
        measure13={selectedItem.strMeasure13}
        measure14={selectedItem.strMeasure14}
        measure15={selectedItem.strMeasure15}
        measure16={selectedItem.strMeasure16}
        measure17={selectedItem.strMeasure17}
        measure18={selectedItem.strMeasure18}
        measure19={selectedItem.strMeasure19}
        measure20={selectedItem.strMeasure20}
        back={back}
      />
    );
  } else
    return (
      <div className="results">
        <button className="backBtn" onClick={props.back}>
          <a href="search">back</a>
        </button>
        {props.items.map((item) => (
          <div key={uuid()} className="items">
            <h3>{item.strMeal}</h3>
            <img src={item.strMealThumb} alt="" id="mealImg" onClick={() => setSelectedItem(item)} />
          </div>
        ))}
      </div>
    );
}
