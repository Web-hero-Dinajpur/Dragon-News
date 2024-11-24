import { Link } from "react-router-dom";
import userImg from '../../assets/image/user.png'
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const Navbar = () => {
    const {user}= useContext(AuthContext);
    return (
        <div className="flex justify-between items-center">
            <div>{user.name}</div>
            <div className="flex items-center gap-6">
                <Link to='/'>Home</Link>
                <Link to='/about'>About</Link>
                <Link to='/career'>Career</Link>
            </div>
            <div className="flex gap-2 items-center">
                <img src={userImg} alt="" />
                <button className="bg-[#403F3F] text-white py-2 px-6">Login</button>
            </div>
        </div>
    );
};

export default Navbar;