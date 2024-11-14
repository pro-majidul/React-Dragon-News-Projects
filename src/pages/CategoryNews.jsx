import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CategoryCard from '../components/CategoryCard';

const CategoryNews = () => {
    const {data:news} = useLoaderData()
    
    return (
        <div className='space-y-10'>
           {
            news.map(Singlenews => <CategoryCard SingleNews={Singlenews}  key={Singlenews._id}></CategoryCard>)
           }
        </div>
    );
};

export default CategoryNews;