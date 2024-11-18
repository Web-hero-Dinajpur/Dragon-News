import Header from "../Header/Header";
import LatestNews from "../LatestNews/LatestNews";
import Navbar from "../Navbar/Navbar";


const Home = () => {
    return (
        <div className="w-11/12 mx-auto font-poppins">
            <Header></Header>
            <LatestNews></LatestNews>
            <Navbar></Navbar>
        </div>
    );
};

export default Home;