import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import ContactUs from "../pages/ContactUs";
import AboutUs from "../pages/AboutUs";
import NotFound from "../pages/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <NotFound />,
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },

      {
        path: "about",
        element: <AboutUs />,
      },

      {
        path: "contact",
        element: <ContactUs />,
      },
    ],
  },
]);

export default router;
