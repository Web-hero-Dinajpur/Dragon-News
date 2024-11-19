import { useLoaderData } from "react-router-dom";


const Pages = () => {
    const {data} = useLoaderData();
    console.log(data);
    return (
        <div>
            <h2>{data.length} News found in this</h2>
        </div>
    );
};

export default Pages;