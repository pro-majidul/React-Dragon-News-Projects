import Swimming from '../assets/swimming.png'
import PlayGround from '../assets/playground.png'
import ClassParty from '../assets/class.png'

const QZone = () => {
    return (
        <div className='bg-[#F3F3F3] p-3'>
            <h2 className='font-semibold py-4'>Q-Zone</h2>
            <div className=' space-y-4'>
                <img src={Swimming} alt="" />
                <img src={PlayGround} alt="" />
                <img src={ClassParty} alt="" />
            </div>
        </div>
    );
};

export default QZone;