import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import LaftNavbar from "../LaftNavbar/LaftNavbar";
import LatestNews from "../LatestNews/LatestNews";
import Navbar from "../Navbar/Navbar";
import RightBar from "../RigntBar/RightBar";


const Home = () => {
    return (
        <div className="w-11/12 mx-auto font-poppins">
            <Header></Header>
            <LatestNews></LatestNews>
            <Navbar></Navbar>
            <main className="py-2 grid grid-cols-12 gap-8">
                <aside className="left col-span-3"><LaftNavbar></LaftNavbar> </aside>
                <section className="col-span-6"><Outlet></Outlet></section>
                <aside className="col-span-3"><RightBar></RightBar></aside>
            </main>
        </div>
    );
};

export default Home;