import BgImage from '../assets/bg.png'

const BG = () => {
    return (
        <div className='w-full '>
            <img className='w-full min-h-screen' src={BgImage} alt="" />
        </div>
    );
};

export default BG;