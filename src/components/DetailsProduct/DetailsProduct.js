import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import './DetailsProduct.css'
const DetailsProduct = () => {
    const food = useLoaderData().meals[0]
    const {strMealThumb, strMeal, strInstructions, strCategory, strTags, strYoutube} = food
    return (
        <div className='single-food-area'>
            <div className='product-img'>
                <img src={strMealThumb} alt="" />
            </div>
            <div className="product-info">
                <h2>Product Name: {strMeal}</h2>
                <p>Info: {strInstructions}</p>
                <h4>Category: {strCategory}</h4>
                <h5>Tage: {strTags}</h5>
                <a href={strYoutube} target='-blank'>Go To Youtube</a>
            </div>
        </div>
    );
};

export default DetailsProduct;