import Navbar from "../components/Navbar";
import WishlistCard from "../components/WishlistCard";

const Wishlist = () => {
  return (
    <div>
      <div className="bg-[url('src/assets/banner6.jpg')]  min-h-[300px] min-w-min  bg-cover bg-center opacity-90 px-24">
        <Navbar />
        <p className="text-5xl font-bold text-white text-center mt-10 ">
          Wishlist
        </p>
      </div>
      <div>
        <WishlistCard/>
      </div>
    </div>
  );
};

export default Wishlist;
