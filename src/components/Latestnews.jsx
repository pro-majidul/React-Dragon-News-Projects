import Marquee from "react-fast-marquee";
const Latestnews = () => {
    return (
        <div className='flex gap-1 bg-gray-300 p-2 items-center rounded-md'>
            <p className='bg-red-500 px-4 py-2 text-white'>Latest</p>
            <Marquee pauseOnHover={true} speed={100}>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod, consectetur.</p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod, consectetur.</p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod, consectetur.</p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod, consectetur.</p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod, consectetur.</p>
            </Marquee>
        </div>
    );
};

export default Latestnews;