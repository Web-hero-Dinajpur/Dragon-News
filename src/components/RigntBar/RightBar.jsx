import FindUs from "./FingUs/FindUs";
import LoginBtn from "./LoginBtn/LoginBtn";


const RightBar = () => {
    return (
        <div>
            <h2 className="font-semibold">Login With</h2>
            <LoginBtn></LoginBtn>
            <div className="mt-8">
                <h2 className="font-semibold">Find Us On</h2>
                <FindUs></FindUs>
            </div>
        </div>
    );
};

export default RightBar;