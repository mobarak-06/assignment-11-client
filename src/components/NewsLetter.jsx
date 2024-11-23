import toast from "react-hot-toast";

const NewsLetter = () => {
  const handleNewsLetter = (e) => {
    e.preventDefault();
    const form = e.target;
    if (form.newsLetter.value) {
        toast.success("Thank you for subscribing to our newsLetter")
    }

    form.reset();
    
  };
  return (
    <div className=" border-2 p-6 rounded-xl w-96">
      <h2 className="text-2xl font-bold">Newsletter</h2>
      <h5 className="text-xl font-medium mt-2">
        Receive update on the latest news and offers
      </h5>
      <form onSubmit={handleNewsLetter}>
        <div className="flex mt-4">
          <input
            type="email"
            name="newsLetter"
            placeholder="Enter Your Email Address"
            className="input input-bordered w-full max-w-xs"
          />
          <button className=" px-6 py-3 bg-pink-500 hover:bg-pink-700 text-white rounded-md btn ml-2">
          Subscribe
          </button>
        </div>
      </form>
    </div>
  );
};

export default NewsLetter;
