import { useEffect, useState } from "react";
import SingleBlog from "./SingleBlog";

const RecentBlogs = () => {
    const [recentBlogs, setRecentBlogs] = useState([]);
    useEffect(() => {
        fetch('/travelBlog.json')
        .then(res => res.json())
        .then(data => setRecentBlogs(data))
    }, [])
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
           {recentBlogs.map(recentBlog => <SingleBlog key={recentBlog.id} recentBlog={recentBlog}/>)}
        </div>
    );
};

export default RecentBlogs;