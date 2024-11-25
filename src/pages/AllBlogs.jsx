import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import SingleBlog from "../components/SingleBlog";

const AllBlogs = () => {
  const [recentBlogs, setRecentBlogs] = useState([]);
  useEffect(() => {
    fetch(`${import.meta.env.VITE_URL}/blogs`)
      .then((res) => res.json())
      .then((data) => setRecentBlogs(data));
  }, []);
  return (
    <div>
      <div className="bg-[url('src/assets/banner4.jpg')]  min-h-[300px] min-w-min  bg-cover bg-center opacity-90 px-24">
        <Navbar />
        <p className="text-5xl font-bold text-white text-center mt-10 ">
          All Blogs
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 mx-24 mt-10">
        {recentBlogs.map((recentBlog) => (
          <SingleBlog key={recentBlog._id} recentBlog={recentBlog} />
        ))}
      </div>
    </div>
  );
};

export default AllBlogs;
