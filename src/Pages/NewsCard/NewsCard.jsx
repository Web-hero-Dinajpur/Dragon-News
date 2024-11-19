const NewsCard = ({ news }) => {
    const { title, author, published_date, name, Pulished_data, details, image_url, rating } = news;

    return (
        <div className="mt-8">

            <div className="flex gap-4 bg-[#F3F3F3] p-2 rounded-t-lg">
                <img className="w-12 rounded-full" src={news.author.img} alt="" />
                <div>
                    {news.author.name} <br />
                    {news.author.published_date}
                </div>
            </div>
            <div className="p-4 border">
                <div>
                    <p className="font-bold text-xl">{news.title}</p>
                    <div className="my-2">
                        <img src={news.image_url} alt="" />
                    </div>
                    <p>{news.details}</p>
                    <button className="text-orange-400 my-2">Read More</button>
                </div>
                <hr />
                <div className="flex items-center gap-2">
                    <div className="rating rating-md">
                        <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                        <input
                            type="radio"
                            name="rating-7"
                            className="mask mask-star-2 bg-orange-400"
                            defaultChecked />
                        <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                    </div>
                    <p className="mt-2">{news.rating.number}</p>
                </div>
            </div>

        </div>
    );
};

export default NewsCard;