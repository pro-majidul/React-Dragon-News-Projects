import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
import { to } from './../../node_modules/moment/src/lib/moment/to';
const Latestnews = () => {
    return (
        <div className='flex gap-2 bg-gray-300 p-2 items-center rounded-md'>
            <p className='bg-red-500 px-4 py-2 text-white'>Latest</p>
            <Marquee pauseOnHover={true} speed={100} 
            className="space-x-5">
                <Link to='/news'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim, repellat molestiae. Dicta tempora porro quis deserunt unde enim, tenetur quod corporis eaque animi sit impedit voluptatibus a molestias ipsa perspiciatis.</Link>
                <Link to='/news'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim, repellat molestiae. Dicta tempora porro quis deserunt unde enim, tenetur quod corporis eaque animi sit impedit voluptatibus a molestias ipsa perspiciatis.</Link>
                <Link to='/news'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim, repellat molestiae. Dicta tempora porro quis deserunt unde enim, tenetur quod corporis eaque animi sit impedit voluptatibus a molestias ipsa perspiciatis.</Link>
            </Marquee>
        </div>
    );
};

export default Latestnews;