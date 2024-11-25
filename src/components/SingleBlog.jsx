import { Link } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import toast from "react-hot-toast";

const SingleBlog = ({ recentBlog }) => {
  const { user } = useAuth();
  const { _id, title, image, shortDescription, category } = recentBlog;
  const name = user?.displayName || {};
  const email = user?.email || {};

  const handleWishlist = () => {
    const wishlistItem = {
      name,
      email,
      title,
      shortDescription,
      category,
      image,
    };
    console.log(wishlistItem);

    fetch("http://localhost:5000/addWishlist", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(wishlistItem),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          toast.success("Wishlist Added SuccessFully !");
        }
      });
  };
  return (
    <div>
      <div className=" bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 ">
        <a href="#">
          <img className="rounded-t-lg" src={image} alt="" />
        </a>
        <div className="p-5">
          <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {title}
            </h5>
          </a>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            <span className="font-semibold text-black">Category:</span> {category}
          </p>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {shortDescription}
          </p>
          <div className="flex justify-between">
            <Link
              to={`/blogDetails/${_id}`}
              className="btn bg-[#50B1C9] text-white"
            >
              Details
            </Link>
            <Link
              to="/wishlist"
              onClick={handleWishlist}
              className="btn bg-[#23BE0A] text-white"
            >
              Wishlist
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleBlog;
