import { Link, useLoaderData } from "react-router-dom";
import Navbar from "../components/Navbar";
import useAuth from "../Hooks/useAuth";
import { useEffect, useState } from "react";

const DetailsOfBlog = () => {
  const [comments, setComments] = useState([]);
  const { user } = useAuth();
  const blog = useLoaderData();
  console.log(blog);
  const { _id, title, image, shortDescription, longDescription, category } =
    blog;

  const handleComments = (e) => {
    e.preventDefault();
    const from = e.target;
    const comment = from.comment.value;
    console.log(comment);
    from.reset();

    const addComments = {
      id: _id,
      name: user.displayName,
      photo: user.photoURL,
      comment,
    };

    fetch(`http://localhost:5000/addComments`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(addComments),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

  useEffect(() => {
    fetch(`http://localhost:5000/addComments/${_id}`)
      .then((res) => res.json())
      .then((data) => setComments(data));
  }, [_id, comments]);

  console.log(comments);

  return (
    <div>
      <div className="bg-gray-500 rounded-sm shadow-xl px-24">
        <Navbar />
      </div>
      <div className="bg-base-100 my-10 mx-24 flex flex-col justify-center items-center">
        <div>
          <img className="w-[650px]" src={image} alt="Album" />
        </div>
        <div className="mt-10">
          <h2 className="text-3xl font-semibold text-center">{title}</h2>
          <p>
            <span className="text-2xl font-semibold mt-6">Category:</span>
            <span className="ml-3 text-xl font-medium">{category}</span>
          </p>
          <p>
            <span className="text-2xl font-semibold mt-6">
              Short Description:
            </span>
            <span className="ml-3">{shortDescription}</span>
          </p>
          <p>
            <span className="text-2xl font-semibold mt-6">
              Short Description:
            </span>
            <span className="ml-3">{longDescription}</span>
          </p>
        </div>
      </div>
      {/* update blog */}
      <div>
        <Link to="/update" className="text-xl font-semibold p-2 bg-green-500 hover:bg-green-600 text-white mx-24 rounded-lg mb-6 btn">
          Update Blog
        </Link>
      </div>
      <div className="mt-4 mx-24">
        <form onSubmit={handleComments}>
          <div className="flex">
            <input
              type="text"
              name="comment"
              placeholder="Comments Here"
              className="input input-bordered w-full"
            />
            <button className=" px-6 py-3 bg-pink-500 hover:bg-pink-700 text-white rounded-md btn ml-2">
              Submit
            </button>
          </div>
        </form>
      </div>
      {/* comments section */}
      {comments.map((comment) => (
        <div key={comment._id} className="flex gap-3 mx-24 mt-8">
          <div>
            <div className="avatar">
              <div className="w-12 rounded-full">
                <img src={comment.photo} />
              </div>
            </div>
          </div>
          <div className="bg-gray-200 rounded-xl p-3">
            <h2 className="text-lg font-semibold">{comment.name}</h2>
            <p>{comment.comment}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DetailsOfBlog;
