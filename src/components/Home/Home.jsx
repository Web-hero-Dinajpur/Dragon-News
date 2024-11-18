import Header from "../Header/Header";
import LatestNews from "../LatestNews/LatestNews";


const Home = () => {
    return (
        <div className="w-11/12 mx-auto">
            <Header></Header>
            <LatestNews></LatestNews>
        </div>
    );
};

export default Home;