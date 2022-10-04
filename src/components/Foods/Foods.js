import React, { useState, useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';
import Food from '../Food/Food';
import './Foods.css'
const Foods = () => {
    let [goods, setFoods] = useState([]);
    const [search, setSearch] = useState("");
    useEffect(() => {
        fetch(
          `https://www.themealdb.com/api/json/v1/1/search.php?f=${search}`
        )
          .then((res) => res.json())
          .then((data) => {
            setFoods(data.meals);
          });
      }, [search]);

    const foods = useLoaderData().meals;
    return (
        <div>
            <input onChange={(e) => setSearch(e.target.value)} type="text" className="search-input" placeholder='search-product'/>
            <div className='foods-area'>
                { goods.length!==0 ?(
                    goods.map(food=><Food
                        key={food.idMeal}
                        food={food}
                    ></Food> )
                    )
                    :
                    (
                        foods.map(food => <Food
                        key={food.idMeal}
                        food={food}
                    ></Food>)
                    )
                }
            </div>
        </div>

    );
};

export default Foods;