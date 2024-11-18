import { FaInstagram, FaTwitch } from "react-icons/fa";
import { RiFacebookCircleLine } from "react-icons/ri";
const FindUs = () => {
    return (
        <div className="mt-3">
            <button className="justify-normal btn rounded-none w-full bg-slate-50 "><span className="bg-slate-200 p-2 rounded-full"><RiFacebookCircleLine></RiFacebookCircleLine></span> Facebook</button>
            <button className="justify-normal btn w-full rounded-none border-t-0 bg-slate-50"><span className="bg-slate-200 p-2 rounded-full"><FaTwitch></FaTwitch></span> Twiter</button>
            <button className="justify-normal btn rounded-none w-full border-t-0 bg-slate-50"><span className="bg-slate-200 p-2 rounded-full"><FaInstagram></FaInstagram> </span>Instagram</button>

        </div>
    );
};

export default FindUs;