const NewsCard = ({news}) => {
    const {title, img, name, Pulished_data, details, image_url, rating} = news;
  
    return (
        <div className="mt-8">
            {news.title}
            <div>
                <img src={news.image_url} alt="" />
            </div>
            
        </div>
    );
};

export default NewsCard;