
import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Root from "../pages/Root";
import AddBlog from "../pages/AddBlog";
import AllBlogs from "../pages/AllBlogs";
import FeatureBlog from "../pages/FeatureBlog";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Wishlist from "../pages/Wishlist";
import ErrorPage from "../pages/ErrorPage";

 const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <Home/>,
        },
        {
          path: "/addBlog",
          element: <AddBlog/>,
        },
        {
          path: "/allBlogs",
          element: <AllBlogs/>,
        },
        {
          path: "/featuredBlog",
          element: <FeatureBlog/>,
        },
        {
          path: "/wishlist",
          element: <Wishlist/>,
        },
        {
          path: "/login",
          element: <Login/>,
        },
        {
          path: "/register",
          element: <Register/>,
        },
      ],
    },
  ]);

  export default router

  