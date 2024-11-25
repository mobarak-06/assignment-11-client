import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import toast from "react-hot-toast";

const WishlistCard = () => {
  const { user } = useAuth();
  const [wishlistItems, setWishlistItems] = useState([]);
  const [controls, setControls] = useState(false);
  useEffect(() => {
    fetch(`${import.meta.env.VITE_URL}/addWishlist/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setWishlistItems(data));
  }, [user, controls]);

  const handleDelete = (id) => {
    fetch(`${import.meta.env.VITE_URL}/delete/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount > 0) {
          toast.success("Delete Successfully !");
          setControls(!controls);
        }
      });
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 mx-24 mt-10">
      {wishlistItems.map((wishlistItem) => (
        <div
          key={wishlistItem._id}
          className=" bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 "
        >
          <a href="#">
            <img className="rounded-t-lg" src={wishlistItem.image} alt="" />
          </a>
          <div className="p-5">
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {wishlistItem.title}
              </h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              <span className="font-semibold text-black">Category:</span>{" "}
              {wishlistItem.category}
            </p>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              {wishlistItem.shortDescription}
            </p>
            <div className="flex justify-between">
              <Link className="btn bg-[#50B1C9] text-white">Details</Link>
              <Link
                onClick={() => handleDelete(wishlistItem._id)}
                className="btn bg-red-500 text-white"
              >
                Wishlist Remove
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default WishlistCard;
