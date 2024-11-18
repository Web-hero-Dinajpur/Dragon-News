import moment from 'moment';
import logo from '../../assets/image/logo.png'

const Header = () => {
    return (
        <div className='flex flex-col justify-center items-center gap-2 py-2'>
            <div>
                <img className='w-[300px]' src={logo} alt="" />
            </div>
            <div className='text-gray-400'>Journalism Without Fear or Favour</div>
            <div>{moment().format("dddd, MMMM Do YYYY")}</div>
        </div>
    );
};

export default Header;