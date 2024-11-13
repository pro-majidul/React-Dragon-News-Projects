import moment from 'moment/moment';
import logo from '../assets/logo.png'

const Header = () => {
    return (
        <div className='flex flex-col justify-center items-center gap-2 py-3'>
           <div>
            <img className='w-72' src={logo} alt="" />
           </div>
           <h2 className='text-gray-500'>Journalism Without Fear or Favour</h2>
           <p className='font-medium'>{moment().format("dddd, MMMM Do YYYY")}</p>
        </div>
    );
};

export default Header;