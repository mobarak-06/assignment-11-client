import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
// import useAuth from "../../Hooks/useAuth";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { useState } from "react";
import useAuth from "../Hooks/useAuth";
import Navbar from "../components/Navbar";

const Login = () => {
  const [showEye, setShowEye] = useState(false);
  const [loginError, setLoginError] = useState("");
  const location = useLocation();
  const navigate = useNavigate();
  console.log(location);
  const { signIn, signInWithGoogle, signInWithGithub } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const { email, password } = data;

    // sign in user
    signIn(email, password)
      .then((result) => {
        console.log(result.user);
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        console.error(error);
        setLoginError(error);
      });
  };

  // social login

  const handleSignInWithGoogle = () => {
    signInWithGoogle()
      .then((result) => {
        console.log(result.user);
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        console.error(error.message);
      });
  };

  const handleSignInWithGithub = () => {
    signInWithGithub()
      .then((result) => {
        console.log(result.user);
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        console.error(error.message);
      });
  };
  return (
    <div>
      <div className="bg-gray-500 rounded-sm shadow-xl px-24">
        <Navbar/>
      </div>
      <main className="mx-auto flex min-h-screen w-full items-center justify-center dark:bg-gray-900 text-black">
      <section className="flex w-[30rem] flex-col space-y-10">
        <div className="text-center text-4xl font-medium text-gray-400">
          Log In
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="w-full transform border-gray-400 border-b-2 bg-transparent text-lg duration-300 focus-within:border-indigo-500 mb-5">
            <input
              type="email"
              placeholder="Email"
              {...register("email", { required: true })}
              className="w-full border-none bg-transparent outline-none placeholder:italic focus:outline-none"
            />
          </div>
          {errors.email && (
            <span className="text-red-500">This field is required</span>
          )}
          <div className="w-full transform border-gray-400 border-b-2 bg-transparent text-lg duration-300 focus-within:border-indigo-500 mb-5 relative">
            <input
              type={showEye ? "text" : "password"}
              placeholder="Password"
              {...register(
                "password",
                { required: true },
                { pattern: /^[A-Za-z]+$/i }
              )}
              className="w-full border-none bg-transparent outline-none placeholder:italic focus:outline-none"
            />
            <span
              className="absolute right-4"
              onClick={() => setShowEye(!showEye)}
            >
              {showEye ? <IoMdEyeOff size={20} /> : <IoMdEye size={20} />}
            </span>
          </div>
          {errors.password && (
            <span className="text-red-500">This field is required</span>
          )}
          {loginError && (
            <p className="text-red-500 font-bold">Some Thing Wrong !</p>
          )}
          <div className="flex items-center justify-center">
            <button className="transform rounded-md  bg-indigo-600 py-2 font-bold duration-300  text-white hover:bg-indigo-400 p-4 w-full btn">
              LOG IN
            </button>
          </div>
        </form>
        <div className="flex justify-between">
          <Link className="transform text-center font-semibold text-gray-500 duration-300 hover:text-gray-900">
            FORGOT PASSWORD?
          </Link>

          <p className="text-center text-lg text-gray-400">
            No account?
            <Link
              to="/register"
              className="font-medium text-indigo-500 underline-offset-4 hover:underline"
            >
              Create One
            </Link>
          </p>
        </div>
        <h2 className="divider text-gray-600">Or Continue With</h2>
        <div className="btn-wrapper text-center flex justify-between">
          <button
            onClick={handleSignInWithGithub}
            className="text-black bg-white active:bg-blueGray-50 text-blueGray-700  px-4 py-2 rounded outline-none focus:outline-none mr-2 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs ease-linear transition-all duration-150 btn w-1/2"
            type="button"
          >
            <img
              alt="..."
              className="w-5 mr-1 "
              src="https://demos.creative-tim.com/notus-js/assets/img/github.svg"
            />
            Github{" "}
          </button>
          <button
            onClick={handleSignInWithGoogle}
            className="text-black bg-white active:bg-blueGray-50 text-blueGray-700  px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs ease-linear transition-all duration-150 btn w-1/2 "
            type="button"
          >
            <img
              alt="..."
              className="w-5 mr-1"
              src="https://demos.creative-tim.com/notus-js/assets/img/google.svg"
            />
            Google
          </button>
        </div>
      </section>
    </main>
    </div>
  );
};

export default Login;
