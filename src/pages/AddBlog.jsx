import Navbar from "../components/Navbar";

const AddBlog = () => {
  return (
    <div>
      <div className="bg-[url('src/assets/banner2.jpg')]  min-h-[300px] min-w-min  bg-cover bg-center opacity-90">
        <Navbar />
        <p className="text-5xl font-bold text-white text-center mt-10 ">Add Blog</p>
      </div>
    </div>
  );
};

export default AddBlog;
