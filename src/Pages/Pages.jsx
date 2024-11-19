import { useLoaderData } from "react-router-dom";
import NewsCard from "./NewsCard/NewsCard";


const Pages = () => {
    const { data: news } = useLoaderData();
    console.log(news)
    return (
        <div className="mt-8">
            <h2 className="font-semibold "> Dragon News Home</h2>
            <p>{news.length} News Found on this Category</p>
            <div>
                {
                    news.map(singleNews => <NewsCard key={singleNews._id} news={singleNews}> </NewsCard>)
                }
            </div>
        </div>
    );
};

export default Pages;