import { useForm } from "react-hook-form";
import Navbar from "../components/Navbar";
import useAuth from "../Hooks/useAuth";
// import toast from "react-hot-toast";

const AddBlog = () => {
  const { user } = useAuth();
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    const { title, shortDescription, longDescription, category, photo } = data;
    console.log(data);
    const name = user?.displayName || {};
    const email = user?.email || {};

    const newUser = {
      name,
      email,
      title,
      longDescription,
      shortDescription,
      category,
      photo,
    };
    console.log(newUser);

    // fetch("https://assignment-10-server-gamma-nine.vercel.app/addCraftItem", {
    //   method: "POST",
    //   headers: {
    //     "content-type": "application/json",
    //   },
    //   body: JSON.stringify(newUser),
    // })
    //   .then((res) => res.json())
    //   .then((data) => {
    //     console.log(data);
    //     if (data.insertedId) {
    //       toast.success("Item Added SuccessFully !");
    //     }
    //   });
  };
  return (
    <div>
      <div className="bg-[url('src/assets/banner2.jpg')]  min-h-[300px] min-w-min  bg-cover bg-center opacity-90 px-24">
        <Navbar />
        <p className="text-5xl font-bold text-white text-center mt-10 ">
          Add Blog
        </p>
      </div>
      <div>
        <div className=" min-w-min min-h-min  dark:bg-gray-900  md:mx-auto px-12 md:px-24 md:py-12 ">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="md:flex gap-6">
              <div className="form-control md:w-full">
                <label className="label">
                  <span className="label-text">Title</span>
                </label>
                <input
                  type="text"
                  placeholder="Title"
                  {...register("title")}
                  className="input input-bordered w-full "
                  required
                />
              </div>
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Short Description</span>
                </label>
                <input
                  type="text"
                  placeholder="Short Description"
                  {...register("shortDescription")}
                  className="input input-bordered  w-full"
                  required
                />
              </div>
            </div>
            <div className="md:flex gap-6">
              <div className="form-control md:w-full">
                <label className="label">
                  <span className="label-text">Photo Url</span>
                </label>
                <input
                  type="text"
                  placeholder="Photo Url"
                  {...register("photo")}
                  className="input input-bordered w-full"
                  required
                />
              </div>
              <div className="form-control md:w-full">
                <label className="label">
                  <span className="label-text">category</span>
                </label>
                <select
                  {...register("category")}
                  className="select select-bordered w-full"
                >
                  <option disabled selected>
                    category
                  </option>
                  <option>Yes</option>
                  <option>No</option>
                </select>
              </div>
            </div>
            <div className="md:flex gap-6">
              <div className="form-control md:w-full">
                <label className="label">
                  <span className="label-text">Long Description</span>
                </label>
                {/* <input
                 
                  className="input input-bordered w-full"
                  required
                /> */}
                <textarea
                   type="text"
                   placeholder="Long Description"
                   {...register("longDescription")}
                  className="textarea textarea-bordered textarea-md w-full "
                ></textarea>
              </div>
            </div>
            <input
              className="btn mt-6 w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white"
              type="submit"
              value="Add Item"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddBlog;
