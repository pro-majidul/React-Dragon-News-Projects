import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

const LeftLayout = () => {

    const [categories, setCategories] = useState([]);
    useEffect(() => {
        fetch('https://openapi.programming-hero.com/api/news/categories')
            .then(res => res.json())
            .then(data => setCategories(data.data.news_category))
    }, [])



    return (
        <div>
            <h3 className='font-semibold'>All Category</h3>
            <div className='flex flex-col gap-2 my-5'>
                {
                    categories.map(category => <NavLink 
                        to={`/category/${category.category_id}`} className={({ isActive }) => isActive ? 'btn btn-accent' : 'btn'} key={category.category_id}>{category.category_name}</NavLink>)
                }
            </div>
        </div>
    );
};

export default LeftLayout;