import React from 'react';
import { FaRegClock, FaShareAlt } from 'react-icons/fa'; // Example of React Icons usage
import { Link } from 'react-router-dom';
import CategoryNews from './../pages/CategoryNews';
import { AiFillStar } from 'react-icons/ai';

const CategoryCard = ({ SingleNews: data = {} }) => {
    console.log(data);
    return (
        <div className=' w-full p-4 bg-white rounded-lg shadow-md'>
            {/* author information */}
            <div className='flex items-center mb-4'>
                <img
                    src={data.author.img}
                    alt={data.author.img}
                    className='w-10 h-10 rounded-full mr-3'
                />
                <div>
                    <p className='font-semibold'>{data.author.name}</p>
                    <p className='text-sm text-gray-500'>{data.author.published_date}</p>
                </div>
                <div className='ml-auto'>
                    <FaShareAlt className='text-gray-600'></FaShareAlt>
                </div>

            </div>
            {/* title */}
            <h3 className='text-xl font-semibold mb-2'>{data.title}</h3>
            {/* thumbnail Image */}
            <img
                src={data.thumbnail_url}
                alt={data.thumbnail_url}
                className='w-full h-48 object-cover rounded-lg mb-4'
            />
            {/* details */}
            <p className='text-gray-700 text-sm mb-4'>
                {data.details.slice(0, 150)}...{" "}
                <span className='text-primary'>Read More</span>

            </p>
            {/* rating and views */}
            <div className='flex items-center justify-between'>
                {/* ratting */}
                <div>
                <AiFillStar></AiFillStar>
                </div>
            </div>
        </div>
    )
};

export default CategoryCard;


/**
 * 
 * {
    "_id": "374df11ae3d9b8b9ce21f4dc53f59b85",
    "others_info": {
        "is_todays_pick": false,
        "is_trending": true
    },
    "category_id": "01",
    "rating": {
        "number": 4.5,
        "badge": "Excellent"
    },
    "total_view": 798,
    "title": "Zelensky says he had ‘great conversation' with Biden, discussed Kiev's further steps",
    "author": {
        "name": "system",
        "published_date": "2022-08-25 18:45:00",
        "img": "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80"
    },
    "thumbnail_url": "https://i.ibb.co/HXC719r/unsplash-Eh-Tc-C9s-YXsw-19.png",
    "image_url": "https://i.ibb.co/T0PnZxD/unsplash-Eh-Tc-C9s-YXsw-8.png",
    "details": "KIEV, August 25. /TASS/. Ukrainian President Vladimir Zelensky said he had a   great   phone conversation with his US counterpart Joe Biden and discussed with him Ukraine's further actions on Thursday.    Had a great conversation with @POTUS. Thanked for the unwavering U.S. support for Ukrainian people - security and financial,   he wrote on Twitter.   We discussed Ukraine's further steps,   Zelensky added.  On Wednesday, US President Joe Biden announced $2.98 bln in military aid to Ukraine. On the same day, Ukrainian Prime Minister Denis Shmygal reported that the Ukrainian state budget received grant aid from the US in the amount of $3 bln."
}
 */