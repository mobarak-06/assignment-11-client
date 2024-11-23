import { Link } from "react-router-dom";
import { FaReddit } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <footer className="bg-gray-900 p-6 mt-6">
        <div className="container px-24 ">
          <div className="lg:flex">
            <div className="w-full -mx-6 lg:w-2/5">
              <div>
             
                  <Link to="/" className=" text-gray-100  Roboto">
                    <p>
                      <span className="text-3xl font-bold">WORLD</span>
                      <br />
                      <span className="text-xl font-semibold">ADVENTURE</span>
                    </p>
                  </Link>

                <div className="flex mt-6 -mx-2 text-white gap-5">
                {/*  */}
                <FaFacebook size={20}/>
                <FaGithub size={20}/>
                <FaReddit size={20}/>
                </div>
              </div>
            </div>

            <div className="mt-6 lg:mt-0 lg:flex-1">
              <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 md:grid-cols-3">
                <div>
                  <h3 className=" uppercase text-white">
                  Categories
                  </h3>
                  <a
                    href="#"
                    className="block mt-2 text-sm  text-gray-300 hover:underline"
                  >
                    Africa
                  </a>
                  <a
                    href="#"
                    className="block mt-2 text-sm  text-gray-300 hover:underline"
                  >
                    Asia
                  </a>
                  <a
                    href="#"
                    className="block mt-2 text-sm  text-gray-300 hover:underline"
                  >
                    Europe 
                  </a>
                  <a
                    href="#"
                    className="block mt-2 text-sm  text-gray-300 hover:underline"
                  >
                    North America
                  </a>
                  <a
                    href="#"
                    className="block mt-2 text-sm  text-gray-300 hover:underline"
                  >
                    South America
                  </a>
                </div>

                <div>
                  <h3 className="text-white uppercase ">
                  Recent Posts
                  </h3>
                  <a
                    href="#"
                    className="block mt-2 text-sm  text-gray-300 hover:underline"
                  >
                    African Wildlife
                  </a>
                  <a
                    href="#"
                    className="block mt-2 text-sm  text-gray-300 hover:underline"
                  >
                    Great Pyramids of Giza
                  </a>
                  <a
                    href="#"
                    className="block mt-2 text-sm  text-gray-300 hover:underline"
                  >
                   Desert Safari in UAE
                   </a>
                 <a
                    href="#"
                    className="block mt-2 text-sm  text-gray-300 hover:underline"
                  >
                   A day on the mountains
                  </a>
                 <a
                    href="#"
                    className="block mt-2 text-sm  text-gray-300 hover:underline"
                  >
                   Christ The Savior – Rio de Janeiro
                  </a>
                </div>

                <div>
                  <h3 className="text-white uppercase">
                  Legal
                  </h3>
                  <a
                    href="#"
                    className="block mt-2 text-sm  text-gray-300 hover:underline"
                  >
                    Terms of use
                  </a>
                  <a
                    href="#"
                    className="block mt-2 text-sm  text-gray-300 hover:underline"
                  >
                    Privacy policy
                  </a>
                  <a
                    href="#"
                    className="block mt-2 text-sm  text-gray-300 hover:underline"
                  >
                    Cookie policy
                  </a>
                </div>
              </div>
            </div>
          </div>

          <hr className="h-px my-6 bg-gray-200 border-none dark:bg-gray-700" />

          <div>
            <p className="text-center text-gray-500 text-gray-300">
              © World Adventure 2020 - All rights reserved
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
