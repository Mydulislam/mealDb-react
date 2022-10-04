import React from 'react';

const Category = ({category}) => {
    const {strCategoryThumb, strCategory} = category;
    return (
        <div>
            <img src={strCategoryThumb} alt="" />
            <h3>{strCategory}</h3>
        </div>
    );
};

export default Category;