import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";


const LatestNews = () => {
    return (
        <div className="flex items-center gap-2 bg-slate-100 my-8 font-semibold p-2">
            <p className="bg-[#D72050] py-2 px-2 text-white">Latest</p>
            <Marquee pauseOnHover={true} speed={100} className="space-x-8">
                <Link>Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...</Link>
            </Marquee>
            
        </div>
    );
};

export default LatestNews;