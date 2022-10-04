import React from 'react';
import { Link } from 'react-router-dom';
import './Food.css';
const Food = ({ food }) => {
    const { idMeal, strMealThumb, strMeal, strInstructions, strArea } = food
    return (
        <div className='food-area'>
            <div>
                <img src={strMealThumb} alt="" />
                <h3>{strMeal}</h3>
                <p>{strInstructions ? strInstructions.slice(0, 200) + '...' : 'It is product for MealDb'}</p>
                <h4>Area: {strArea}</h4>
            </div>
            <Link to={`/food/${idMeal}`}>
                <button>Details</button>
            </Link>
        </div>
    );
};

export default Food;