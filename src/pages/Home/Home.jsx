import Navbar from "../../components/Navbar";
import NewsLetter from "../../components/NewsLetter";
import RecentBlogs from "../../components/RecentBlogs";
const Home = () => {
  return (
    <div>
      {/* banner section */}
      <div className="bg-[url('src/assets/banner3.jpg')]  min-h-[750px] min-w-min  bg-cover bg-center px-24">
        <Navbar />
        <div>
          <h2 className="text-4xl font-semibold text-white text-center mt-52">
            Explore The Colorful World
          </h2>
          <h1 className="text-7xl font-bold text-white text-center mt-16">
            A Wonderful Gift
          </h1>
          <div className="flex flex-col justify-center items-center mt-16">
            <button className="py-4 px-8 rounded-3xl bg-[#fb2056] text-white font-semibold ">
              Learn More
            </button>
          </div>
        </div>
      </div>

      <div className=" md:flex md:justify-between mx-24 gap-10 mt-24">
        {/* recent blogs */}
        <div>
          <RecentBlogs />
        </div>
        {/* newsLetter section */}
        <div>
          <NewsLetter/>
        </div>
      </div>
    </div>
  );
};

export default Home;
