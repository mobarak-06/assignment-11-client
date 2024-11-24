import toast from "react-hot-toast";
import useAuth from "../Hooks/useAuth";
import { useForm } from "react-hook-form";
import { useLoaderData } from "react-router-dom";

const Update = () => {
  const { user } = useAuth();
  const { register, handleSubmit } = useForm();

  const blog = useLoaderData();
  const { _id, title, image, shortDescription, longDescription, category } =
  blog;


  const onSubmit = (data) => {
    const { title, shortDescription, longDescription, category, photo } = data;
    const name = user?.displayName || {};
    const email = user?.email || {};

    const updatedUser = {
      name,
      email,
      title,
      longDescription,
      shortDescription,
      category,
      photo,
    };

    fetch(`http://localhost:5000/update/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedUser),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount) {
          toast.success("Blog Updated SuccessFully !");
        }
      });
  };
  return (
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
                defaultValue={title}
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
                defaultValue={shortDescription}
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
                defaultValue={image}
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
                defaultValue={category}
              >
                <option disabled selected>
                  category
                </option>
                <option>Asia</option>
                <option>Europe</option>
                <option>Africa</option>
                <option>North America</option>
                <option>South America</option>
              </select>
            </div>
          </div>
          <div className="md:flex gap-6">
            <div className="form-control md:w-full">
              <label className="label">
                <span className="label-text">Long Description</span>
              </label>
              <textarea
                type="text"
                placeholder="Long Description"
                {...register("longDescription")}
                className="textarea textarea-bordered textarea-md w-full "
                defaultValue={longDescription}
              ></textarea>
            </div>
          </div>
          <input
            className="btn mt-6 w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white"
            type="submit"
            value="Update"
          />
        </form>
      </div>
    </div>
  );
};

export default Update;
