const NewsLetter = () => {
    return (
        <div className=" border-2 p-6 rounded-xl w-96">
           <h2 className="text-2xl font-bold">Newsletter</h2> 
           <h5 className="text-xl font-medium mt-2">Receive update on the latest news and offers</h5>
           <div className="flex mt-4">
           <input type="text" placeholder="Enter Your Email Address" className="input input-bordered w-full max-w-xs" />
           <button className=" px-6 py-3 bg-pink-500 rounded-md btn ml-2">Submit</button>
           </div>
        </div>
    );
};

export default NewsLetter;