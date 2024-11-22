
import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Root from "../pages/Root";
import AddBlog from "../pages/AddBlog";
import AllBlogs from "../pages/AllBlogs";
import FeatureBlog from "../pages/FeatureBlog";

 const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      // errorElement: <ErrorPage />,
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
      ],
    },
  ]);

  export default router

  