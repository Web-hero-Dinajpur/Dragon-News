import { FaGithub, FaGoogle } from "react-icons/fa";

const LoginBtn = () => {
    return (
        <div className="*:w-full space-y-2 mt-4">
            <button className="btn border-blue-500 text-blue-400"><FaGoogle></FaGoogle> LogIn with Google </button>
            <button className="btn border-black"><FaGithub></FaGithub> LogIn with GitHub</button>
        </div>
    );
};

export default LoginBtn;