import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Category from '../Category/Category';
import './Categories.css'
const Categories = () => {
    const categories = useLoaderData().categories;
    console.log(categories)
    return (
        <div className='category-area'>
            {
                categories.map(category => <Category
                    key={category.idCategory}
                    category = {category}
                ></Category>)
            }
        </div>
    );
};

export default Categories;